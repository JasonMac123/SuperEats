import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SplashScreen, useLocalSearchParams } from "expo-router";
import { Restaurant } from "../../constants/types";

import firebase_app from "../../firebase/config";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const RestaurantIdPage = () => {
  const { restaurantId } = useLocalSearchParams();
  const id = restaurantId as string;

  const [restaurantData, setRestaurantData] = useState<Restaurant | Object>({});

  useEffect(() => {
    const db = getFirestore(firebase_app);

    getDoc(doc(db, "restaurants", id))
      .then((data: any) => {
        setRestaurantData({ ...data.data(), id: data.id });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  if (!restaurantData) {
    return <SplashScreen />;
  }

  return (
    <View>
      <Text>[restaurantId]</Text>
    </View>
  );
};

export default RestaurantIdPage;
