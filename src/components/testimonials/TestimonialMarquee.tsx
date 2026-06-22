import { useRef, useEffect } from "react";
import gsap from "gsap";
import type { Testimonial } from "@/lib/utils";
import TestimonialCard from "./TestimonialCard";

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}

export default function TestimonialMarquee({
  testimonials,
  direction = "left",
  speed = 40,
}: TestimonialMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout to settle
    const rafId = requestAnimationFrame(() => {
      // The track contains two copies of the cards.
      // We measure one copy's width (half the track) and loop over that distance.
      const totalWidth = track.scrollWidth / 2;

      if (totalWidth === 0) return;

      const duration = totalWidth / speed;

      // Reset position
      gsap.set(track, { x: direction === "left" ? 0 : -totalWidth });

      tweenRef.current = gsap.to(track, {
        x: direction === "left" ? -totalWidth : 0,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const val = parseFloat(x);
            // Seamless wrap
            return ((val % totalWidth) + totalWidth) % totalWidth === 0
              ? 0
              : ((val % totalWidth) + totalWidth) % totalWidth - totalWidth;
          }),
        },
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      tweenRef.current?.kill();
    };
  }, [direction, speed, testimonials]);

  // Pause on hover for desktop users
  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--foreground), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--foreground), transparent)",
        }}
      />

      {/* Scrolling track — two copies for seamless loop */}
      <div ref={trackRef} className="flex gap-5 will-change-transform">
        {testimonials.map((t, i) => (
          <TestimonialCard key={`a-${i}`} testimonial={t} />
        ))}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`b-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
