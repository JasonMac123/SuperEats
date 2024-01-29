import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import firebase_app from "../../firebase/config";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { Restaurant } from "../../constants/types";
import { useCart } from "../../hooks/useCart";

import ParallaxHeader from "../../components/Parallax/ParallaxHeader";
import SkeletonHeader from "../../components/Skeleton/SkeletonHeader";
import SkeletonSection from "../../components/Skeleton/SkeletonSection";
import RestaurantFooter from "../../components/Footers/RestaurantFooter";

const RestaurantIdPage = () => {
  const { restaurantId } = useLocalSearchParams();
  const id = restaurantId as string;

  const [restaurantData, setRestaurantData] = useState<Restaurant>();

  const { quantity, total } = useCart();

  useEffect(() => {
    const db = getFirestore(firebase_app);

    getDoc(doc(db, "restuarants", id))
      .then((doc: any) => {
        setRestaurantData({ ...doc.data(), id: doc.id });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  if (!restaurantData) {
    return (
      <>
        <SkeletonHeader />
        <SkeletonSection />
        <SkeletonSection />
      </>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <ParallaxHeader data={restaurantData} />
      {quantity > 0 && <RestaurantFooter quantity={quantity} total={total} />}
    </>
  );
};

export default RestaurantIdPage;
