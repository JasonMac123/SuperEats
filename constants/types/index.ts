export interface Restaurant {
  name: string;
  id: string;
  description: string;
  img: string;
  lat: number;
  long: number;
  rating: number;
  fee: number;
  address: string;
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
