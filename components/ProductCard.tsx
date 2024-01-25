import { View, Text, Image } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import tw from "twrnc";

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
    <View style={tw`flex-row`}>
      <Image source={{ uri: item.img }} />
      <View>
        <Text style={tw`text-xl`}>{item.name}</Text>
        <Text style={tw`text-neutral-400`}>{item.price * item.quantity}</Text>
      </View>
      <View style={tw`flex-row gap-4 bg-neutral-200`}>
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
