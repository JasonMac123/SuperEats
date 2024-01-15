import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const RestaurantIdPage = () => {
  const { restaurantId } = useLocalSearchParams();

  return (
    <View>
      <Text>[restaurantId]</Text>
    </View>
  );
};

export default RestaurantIdPage;
