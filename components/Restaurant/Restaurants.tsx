import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import firebase_app from "../../firebase/config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import tw from "twrnc";
import { Restaurant } from "../../constants/types";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [restaurantData, setrestaurantData] = useState<Restaurant[]>([]);

  useEffect(() => {
    let items: any = [];
    const db = getFirestore(firebase_app);
    const restaurantSnapshot = collection(db, "restaurants");

    getDocs(query(restaurantSnapshot, where("featured", "==", true)))
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
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </ScrollView>
  );
};

export default Restaurants;
