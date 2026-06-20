import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  imageAlt?: string;
}

const MenuCard = React.forwardRef<HTMLDivElement, MenuCardProps>(
  (
    {
      className,
      imageUrl,
      name,
      description,
      price,
      rating,
      reviews,
      imageAlt = "Menu Item",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "menu-card group w-full overflow-hidden rounded-xl border border-[var(--foreground)]/15 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02]",
          className
        )}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        {...props}
      >
        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-2.5 p-4">
          {/* Title */}
          <h3
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed opacity-70 line-clamp-2"
            style={{ color: "var(--foreground)" }}
          >
            {description}
          </p>

          {/* Price & Rating Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span
              className="text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              ₹{price}
            </span>

            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {rating}
              </span>
              <span
                className="text-xs opacity-60"
                style={{ color: "var(--foreground)" }}
              >
                ({reviews.toLocaleString()})
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MenuCard.displayName = "MenuCard";

export { MenuCard };
export type { MenuCardProps };
