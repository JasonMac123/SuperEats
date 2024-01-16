import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { SplashScreen, useLocalSearchParams } from "expo-router";
import { Restaurant } from "../../constants/types";

import firebase_app from "../../firebase/config";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import ParallaxHeader from "../../components/Parallax/ParallaxHeader";

const RestaurantIdPage = () => {
  const { restaurantId } = useLocalSearchParams();
  const id = restaurantId as string;

  const [restaurantData, setRestaurantData] = useState<Restaurant>();

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
    <>
      <StatusBar style="dark" />
      <ParallaxHeader img={restaurantData.img} />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default RestaurantIdPage;
