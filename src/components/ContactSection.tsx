import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Phone, MapPin, Navigation } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import cafe1 from "@/assets/contacts/cafe1.webp";
import cafe2 from "@/assets/contacts/cafe2.webp";
import cafe3 from "@/assets/contacts/cafe3.webp";
import cafe4 from "@/assets/contacts/cafe4.webp";
import cafe5 from "@/assets/contacts/cafe5.webp";

gsap.registerPlugin(ScrollTrigger);

const contactImages = [cafe1, cafe2, cafe3, cafe4, cafe5];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const info = infoRef.current;
      const map = mapRef.current;
      const carousel = carouselRef.current;
      if (!info || !map || !carousel) return;

      // Info block — stagger each child
      const infoItems = info.querySelectorAll(".contact-info-item");
      gsap.fromTo(
        infoItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Map embed — slide up
      gsap.fromTo(
        map,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: map,
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Carousel — clip-path reveal
      gsap.fromTo(
        carousel,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.0,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: carousel,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 md:gap-14">
        {/* Section Title — foreground color on dark bg */}
        <SectionTitle
          title="Visit Us"
          subtitle="We'd love to see you — drop by anytime!"
          color="var(--foreground)"
        />

        {/* Two-column layout */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ── Column 1: Contact Details + Map ── */}
          <div className="flex flex-col gap-8">
            {/* Contact info cards */}
            <div ref={infoRef} className="flex flex-col gap-5">
              {/* Phone */}
              <div className="contact-info-item flex items-start gap-4">
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(242,244,243,0.1)",
                    border: "1px solid rgba(242,244,243,0.15)",
                  }}
                >
                  <Phone
                    size={20}
                    style={{ color: "var(--foreground)" }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--foreground)", opacity: 0.5 }}
                  >
                    Call us
                  </p>
                  <a
                    href="tel:08240322909"
                    className="text-lg md:text-xl font-bold tracking-wide hover:underline"
                    style={{ color: "var(--foreground)" }}
                  >
                    082403 22909
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-item flex items-start gap-4">
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(242,244,243,0.1)",
                    border: "1px solid rgba(242,244,243,0.15)",
                  }}
                >
                  <MapPin
                    size={20}
                    style={{ color: "var(--foreground)" }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--foreground)", opacity: 0.5 }}
                  >
                    Location
                  </p>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--foreground)", opacity: 0.85 }}
                  >
                    DG 17, RABINDRA TIRTHA,
                    <br />
                    Major Arterial Road (South-East),
                    <br />
                    DG Block (Newtown), Action Area 1D, West,
                    <br />
                    Newtown, Kolkata, New Town,
                    <br />
                    West Bengal 700156
                  </p>
                </div>
              </div>


              {/* Directions CTA */}
              <div className="contact-info-item">
                <a
                  href="https://share.google/ObGhDFiCm99X9T43j"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <span className="inline-flex items-center gap-2">
                      <Navigation size={16} strokeWidth={2} />
                      Get Directions
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              ref={mapRef}
              className="contact-map-wrapper rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(242,244,243,0.12)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0095163415244!2d88.4736633!3d22.5787474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275277bfbcfab%3A0x63da02817e76d8f2!2sGarden%20Cafe!5e0!3m2!1sen!2sin!4v1782091971803!5m2!1sen!2sin"
                className="w-full aspect-[4/3] lg:aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Garden Cafe Location"
              />
            </div>
          </div>

          {/* ── Column 2: Swiper Fade Carousel ── */}
          <div
            ref={carouselRef}
            className="contact-carousel aspect-video rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(242,244,243,0.12)",
            }}
          >
            <Swiper
              modules={[EffectFade, Autoplay, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={1200}
              className="contact-swiper w-full h-full"
            >
              {contactImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Garden Cafe ambience ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
