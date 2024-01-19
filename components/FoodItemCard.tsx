import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

import tw from "twrnc";
import { FoodItem } from "../constants/types";

interface FoodItemCardProps {
  item: FoodItem;
}

const FoodItemCard = ({ item }: FoodItemCardProps) => {
  return (
    <Link href={"/"} asChild>
      <View style={tw`flex-row justify-between mx-4`}>
        <View>
          <Text style={tw`text-neutral-700 text-2xl`}>
            {item.name}{" "}
            <Text style={tw`text-neutral-500 text-lg`}>${item.price}</Text>
          </Text>
          <Text style={tw`text-neutral-400`}>{item.info}</Text>
        </View>
        <Image source={{ uri: item.img }} width={100} height={100} />
      </View>
    </Link>
  );
};

export default FoodItemCard;
