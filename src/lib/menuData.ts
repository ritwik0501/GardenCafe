// Static menu data — add or remove items here to update the menu grid.
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  imageAlt: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Masala Dosa",
    description: "Crispy golden crepe filled with spiced potato masala, served with chutney.",
    price: 120,
    rating: 4.8,
    reviews: 1240,
    imageUrl:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Crispy masala dosa on a plate",
  },
  {
    id: 2,
    name: "Soft Idli Platter",
    description: "Fluffy steamed rice cakes paired with sambar and coconut chutney.",
    price: 80,
    rating: 4.7,
    reviews: 980,
    imageUrl:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop",
    imageAlt: "Soft idli platter with sambar and chutney",
  },
  {
    id: 3,
    name: "Classic Sandwich",
    description: "Toasted bread layered with fresh veggies, cheese and special sauce.",
    price: 150,
    rating: 4.6,
    reviews: 870,
    imageUrl:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop",
    imageAlt: "Grilled classic sandwich with vegetables",
  },
  {
    id: 4,
    name: "Vada Pav",
    description: "Mumbai's iconic spiced potato fritter tucked into a soft bun with chutneys.",
    price: 60,
    rating: 4.9,
    reviews: 2100,
    imageUrl:
      "https://nutriscan.app/calories-nutrition/images/vada-pav-88ad4.webp?format=auto&q=85&w=1200",
    imageAlt: "Spicy vada pav with green chutney",
  },
  {
    id: 5,
    name: "Butter Cookies",
    description: "Melt-in-your-mouth homemade butter cookies with a hint of vanilla.",
    price: 90,
    rating: 4.5,
    reviews: 650,
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    imageAlt: "Freshly baked butter cookies on a tray",
  },
  {
    id: 6,
    name: "Fresh Fruit Shake",
    description: "Chilled blend of seasonal fruits with milk and a touch of honey.",
    price: 130,
    rating: 4.7,
    reviews: 1560,
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop",
    imageAlt: "Colorful fresh fruit shake in a glass",
  },
  {
    id: 7,
    name: "Chocolate Sundae",
    description: "Rich chocolate ice cream drizzled with hot fudge and whipped cream.",
    price: 180,
    rating: 4.8,
    reviews: 1890,
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
    imageAlt: "Decadent chocolate ice cream sundae",
  },
  {
    id: 8,
    name: "Cold Coffee",
    description: "Creamy cold coffee blended with ice and topped with whipped cream.",
    price: 140,
    rating: 4.6,
    reviews: 1340,
    imageUrl:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop",
    imageAlt: "Iced cold coffee with cream",
  },
  {
    id: 9,
    name: "Mango Ice Cream",
    description: "Luscious scoop of real mango ice cream made with Alphonso pulp.",
    price: 110,
    rating: 4.9,
    reviews: 1720,
    imageUrl:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
    imageAlt: "Mango ice cream scoops in a bowl",
  },
];
