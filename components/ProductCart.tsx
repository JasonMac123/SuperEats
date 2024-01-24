import { View, Text } from "react-native";
import React from "react";
import { FoodItem } from "../constants/types";

interface ProductCartProps {
  item: FoodItem & {
    quantity: number;
  };
}

const ProductCart = ({ item }: ProductCartProps) => {
  return (
    <View>
      <Text>ProductCart</Text>
    </View>
  );
};

export default ProductCart;
