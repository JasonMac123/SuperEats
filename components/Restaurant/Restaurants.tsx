import { Text, View, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";

import firebase_app from "../../firebase/config";
import {
  getFirestore,
  getDocs,
  collection,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import tw from "twrnc";

interface Restaurant {
  name: string;
  img: any;
  lat: number;
  long: number;
  rating: number;
  featured: boolean;
  meals: Meal[];
}

interface Meal {
  name: string;
  price: number;
  img: any;
}

const Restaurants = () => {
  const [restaurantData, setrestaurantData] = useState<Restaurant[]>([]);

  useEffect(() => {
    let items: any = [];
    const db = getFirestore(firebase_app);
    const restaurantSnapshot = collection(db, "restaurants");

    getDocs(
      query(restaurantSnapshot, where("featured", "==", true), orderBy("name"))
    )
      .then((data: any) => {
        data.forEach((doc: any) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setrestaurantData(items);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

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
