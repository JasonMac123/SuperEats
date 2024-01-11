export interface Restaurant {
  name: string;
  id: string;
  img: any;
  lat: number;
  long: number;
  rating: number;
  numberOfRatings: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  featured: boolean;
  meals: Meal[];
}

export interface Meal {
  name: string;
  price: number;
  info: string;
  img: any;
}
