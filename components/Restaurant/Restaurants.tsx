import { Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";

import tw from "twrnc";

interface Restaurant {
  name: string;
  img: any;
  lat: number;
  long: number;
  rating: number;
  meals: Meal[];
}

interface Meal {
  name: string;
  price: number;
  img: any;
}

const Restaurants = () => {
  const [restaurantData, setrestaurantData] = useState<Restaurant[]>([]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`gap-4 bg-white`}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {restaurantData.map((restaurant: Restaurant) => (
        <View key={restaurant.name} style={tw`mx-1`}>
          <Image source={restaurant.img} />
          <Text style={tw`font-semibold text-sm text-center shadow-md`}>
            {restaurant.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Restaurants;
