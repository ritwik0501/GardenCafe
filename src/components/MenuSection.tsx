import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MenuGrid from "./MenuGrid";

gsap.registerPlugin(ScrollTrigger);

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".menu-card");
      if (!cards.length) return;

      // Set initial state for all cards
      gsap.set(cards, {
        y: 60,
        opacity: 0,
        scale: 0.92,
      });

      // Stagger reveal on scroll
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            y: 60,
            opacity: 0,
            scale: 0.92,
            duration: 0.5,
            ease: "power3.in",
            stagger: 0.06,
            overwrite: true,
          });
        },
        start: "top 88%",
        end: "bottom 10%",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Section Title */}
      <div className="flex flex-col items-center gap-10 md:gap-14">
        <MenuSectionTitle />
        <MenuGrid />
      </div>
    </section>
  );
}

/**
 * Title block for the menu section.
 * Uses a custom inline variant since the default SectionTitle decorative lines
 * use `--background` which would be invisible on this same-colored section.
 */
function MenuSectionTitle() {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = titleRef.current;
      if (!el) return;

      const heading = el.querySelector(".menu-heading");
      const sub = el.querySelector(".menu-subtitle");
      const decorLeft = el.querySelector(".menu-decor-left");
      const decorRight = el.querySelector(".menu-decor-right");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        [decorLeft, decorRight],
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
        0
      );

      tl.fromTo(
        heading,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        0.1
      );

      if (sub) {
        tl.fromTo(
          sub,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          0.35
        );
      }
    },
    { scope: titleRef }
  );

  return (
    <div ref={titleRef} className="flex flex-col items-center gap-4 px-4">
      <div className="flex items-center gap-3 md:gap-5 w-full max-w-2xl">
        <span
          className="menu-decor-left flex-1 h-[2px] rounded-full origin-right"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--foreground))",
          }}
        />
        <h2
          className="menu-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight whitespace-nowrap px-4 py-2 rounded-full"
          style={{ color: "var(--foreground)" }}
        >
          Our Menu is for You
        </h2>
        <span
          className="menu-decor-right flex-1 h-[2px] rounded-full origin-left"
          style={{
            background:
              "linear-gradient(to left, transparent, var(--foreground))",
          }}
        />
      </div>

      <p
        className="menu-subtitle text-center text-base md:text-lg opacity-70 max-w-lg"
        style={{ color: "var(--foreground)" }}
      >
        Handcrafted dishes made with love and the freshest ingredients
      </p>
    </div>
  );
}
