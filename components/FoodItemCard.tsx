import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

import tw from "twrnc";
import { FoodItem } from "../constants/types";
import useFoodItem from "../hooks/useFoodItem";

interface FoodItemCardProps {
  item: FoodItem;
}

const FoodItemCard = ({ item }: FoodItemCardProps) => {
  const { setItem } = useFoodItem();

  return (
    <Link href={"/(modal)/foodItem"} asChild>
      <TouchableOpacity onPress={() => setItem(item)}>
        <View style={tw`flex-row justify-between mx-4`}>
          <View>
            <Text style={tw`text-neutral-700 text-2xl`}>{item.name}</Text>
            <Text style={tw`text-neutral-500 text-base`}>${item.price}</Text>
            <Text style={tw`text-neutral-400`}>{item.info}</Text>
          </View>
          <Image source={{ uri: item.img }} width={100} height={100} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default FoodItemCard;
