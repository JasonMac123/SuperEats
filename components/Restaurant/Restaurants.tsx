import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import firebase_app from "../../firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import tw from "twrnc";
import { Restaurant } from "../../constants/types";
import RestaurantCard from "./RestaurantCard";

interface RestaurantProps {
  featured?: boolean;
}

const Restaurants = ({ featured }: RestaurantProps) => {
  const [restaurantData, setrestaurantData] = useState<Restaurant[]>([]);
  const [featuredData, setFeaturedData] = useState<Restaurant[]>([]);

  useEffect(() => {
    let restaurants: Restaurant[] = [];
    const db = getFirestore(firebase_app);
    const restaurantSnapshot = collection(db, "restuarants");

    getDocs(restaurantSnapshot)
      .then((data: any) => {
        data.forEach((doc: any) => {
          restaurants.push({ ...doc.data(), id: doc.id });
        });
        const filtered = restaurants.filter(
          (restaurant) => restaurant.featured
        );

        setrestaurantData(restaurants);
        setFeaturedData(filtered);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`gap-4`}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {featured ? (
        <>
          {featuredData.map((restaurant: Restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
          ))}
        </>
      ) : (
        <>
          {restaurantData.map((restaurant: Restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default Restaurants;
