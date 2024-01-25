import { View, Text, Image } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { FoodItem } from "../constants/types";

interface ProductCartProps {
  item: FoodItem & {
    quantity: number;
  };
  addToCart: (item: FoodItem) => void;
  reduceProduct: (item: FoodItem) => void;
}

const ProductCard = ({ item }: ProductCartProps) => {
  return (
    <View>
      <Image source={{ uri: item.img }} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
      <View>
        {item.quantity === 1 ? (
          <Feather name="trash" size={24} color="black" />
        ) : (
          <AntDesign name="minus" size={24} color="black" />
        )}
        {item.quantity}
        <AntDesign name="plus" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProductCard;
