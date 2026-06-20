import { menuItems } from "@/lib/menuData";
import { MenuCard } from "@/components/ui/menu-card";

/**
 * Responsive grid that renders all menu items.
 * Separated from MenuSection so the grid can be reused or swapped independently.
 */
export default function MenuGrid() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            reviews={item.reviews}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
