import type { Testimonial } from "@/lib/utils";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.clientName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 select-none"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        border: "1px solid rgba(242, 244, 243, 0.08)",
      }}
    >
      {/* Header: avatar + name + designation + time */}
      <div className="flex items-center gap-3">
        {/* Avatar circle with initials */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            background: "linear-gradient(135deg, #9c6644, #b08968)",
            color: "var(--foreground)",
          }}
        >
          {initials}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold truncate">
            {testimonial.clientName}
          </span>
          <div className="flex items-center gap-2 text-xs opacity-60">
            <span>{testimonial.clientDesignation}</span>
            <span>·</span>
            <span>{testimonial.reviewTime}</span>
          </div>
        </div>
      </div>

      {/* Star rating */}
      <StarRating rating={testimonial.rating} size={16} />

      {/* Review text */}
      <p
        className="text-sm leading-relaxed line-clamp-4 opacity-85"
        style={{ minHeight: "5rem" }}
      >
        {testimonial.review}
      </p>

      {/* Google attribution badge */}
      <div className="flex items-center gap-1.5 mt-auto pt-2 opacity-40">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <span className="text-xs">Google Review</span>
      </div>
    </div>
  );
}
