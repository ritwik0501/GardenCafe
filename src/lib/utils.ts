import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Testimonial {
  clientName: string;
  clientDesignation: string;
  reviewTime: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    clientName: "Sandip Nowlakha",
    clientDesignation: "Local Guide",
    reviewTime: "5 months ago",
    review:
      "Every time I have eaten the wide range of vegetarian food its been good. Nothing as good in Newtown. Fresh and Affordable. Must try. Next to Hidco bhawan at Rabindra Tirth.",
    rating: 5,
  },
  {
    clientName: "Selena",
    clientDesignation: "Customer",
    reviewTime: "3 months ago",
    review:
      "I really liked this place. The area is peaceful and the food was nice and tasty. I loved it. Thank you 😊",
    rating: 5,
  },
  {
    clientName: "Sayak Acharjee",
    clientDesignation: "Local Guide",
    reviewTime: "6 months ago",
    review:
      "Excellent ambience and food. Must try. Very hygenic and fresh.",
    rating: 5,
  },
  {
    clientName: "Disha Roy Chowdhury",
    clientDesignation: "Customer",
    reviewTime: "2 months ago",
    review:
      "Loved it! As with all other outlets fresh and delicious food. The South Indian is always my personal favourite ❤️",
    rating: 5,
  },
  {
    clientName: "Meghjit Nandi",
    clientDesignation: "Customer",
    reviewTime: "5 months ago",
    review:
      "A Beautiful South Indian restaurant. With Quality food. I am going to visit again ♥️.",
    rating: 4.5,
  },
  {
    clientName: "Nitin Bagaria",
    clientDesignation: "Local Guide",
    reviewTime: "5 months ago",
    review:
      "Very good for pizza and south indian.",
    rating: 4.5,
  },
  {
    clientName: "Rohan Sanghrajka",
    clientDesignation: "Customer",
    reviewTime: "2 months ago",
    review:
      "Amazing food! Especially the Rava dosa, butter idli and cheese chilli mushroom pizza.",
    rating: 5,
  },
  {
    clientName: "Nidhi Sharma",
    clientDesignation: "Local Guide",
    reviewTime: "5 months ago",
    review:
      "Beautiful location with a lovely ambience. The South Indian food is absolutely delicious, and for vegetarians it's truly a paradise. Definitely worth visiting!",
    rating: 5,
  },
  {
    clientName: "Tanishq Halder",
    clientDesignation: "Local Guide",
    reviewTime: "5 months ago",
    review:
      "Rabindra tirtha type vibes. Excellent dosa sambar n Vada, top top service.",
    rating: 5,
  },
  {
    clientName: "Ria Mitra",
    clientDesignation: "Customer",
    reviewTime: "7 months ago",
    review:
      "Always the best option for south indian food in Kolkata. Highly recommend 😍",
    rating: 5,
  },
  {
    clientName: "Arjun Nowlakha",
    clientDesignation: "Local Guide",
    reviewTime: "5 months ago",
    review:
      "I can easily say the food is outstanding! Besides the crispy Dosas. The refreshing Dahi Vada is delicious & unlike any-other. Go, give them a try — you'll also be satisfied.",
    rating: 5,
  },
  {
    clientName: "Sangeeta Palliwal",
    clientDesignation: "Customer",
    reviewTime: "7 months ago",
    review:
      "Garden Cafe has always been the best! The owners are extremely particular about the health, hygiene, taste and comfort of their customers!",
    rating: 5,
  },
  {
    clientName: "Vivek Anand",
    clientDesignation: "Local Guide",
    reviewTime: "7 months ago",
    review:
      "A hidden gem in the heart of New Town! The food is absolutely delightful! Their dosa, idli, and podi idli are outstanding — authentic flavours, fresh preparation, and that beautiful old-world South Indian charm.",
    rating: 5,
  },
  {
    clientName: "Madhuvan Venkat",
    clientDesignation: "Customer",
    reviewTime: "2 months ago",
    review:
      "Great dosas, very similar to Tamil and Telugu dosas. All south indian food is good.",
    rating: 4.5,
  },
  {
    clientName: "Shawn Kapur",
    clientDesignation: "Customer",
    reviewTime: "2 months ago",
    review:
      "Excellent South Indian food, as expected from the Garden Cafe brand.",
    rating: 5,
  },
  {
    clientName: "Chaman Garg",
    clientDesignation: "Local Guide",
    reviewTime: "7 months ago",
    review:
      "This branch carries on the same taste and quality of the other Garden Cafes. Amazing food and taste.",
    rating: 5,
  },
  {
    clientName: "Kaustubh Jindal",
    clientDesignation: "Customer",
    reviewTime: "4 months ago",
    review:
      "Very good food and very hospitable people.",
    rating: 5,
  },
  {
    clientName: "Nawani Jalan",
    clientDesignation: "Customer",
    reviewTime: "7 months ago",
    review:
      "Best south Indian food in Kolkata. My favourite eating joint.",
    rating: 5,
  },
  {
    clientName: "Shikha Gupta",
    clientDesignation: "Customer",
    reviewTime: "5 months ago",
    review:
      "The beauty of place lies in food and the astonishing garden where you feel all the calmness from the Chaotic City ❤️",
    rating: 5,
  },
  {
    clientName: "Milind Choudhary",
    clientDesignation: "Customer",
    reviewTime: "7 months ago",
    review:
      "One of the best places in Kolkata to have South Indian food. Finally, we have an outlet in Newtown. Thanks to the owners for bringing up this outlet here.",
    rating: 4.5,
  },
];
