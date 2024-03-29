import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";
import tw from "twrnc";

import useFoodItem from "../../hooks/useFoodItem";
import { useRestaurant } from "../../hooks/useRestaurant";

import { FoodItem } from "../../constants/types";

interface FoodItemCardProps {
  item: FoodItem;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  fee: number;
  name: string;
}

const FoodItemCard = ({
  item,
  minDeliveryTime,
  maxDeliveryTime,
  fee,
  name,
}: FoodItemCardProps) => {
  const { setItem, setDeliveryTime, setFee, setRestaurantName } = useFoodItem();

  return (
    <Link href={"/(modal)/foodItem"} asChild>
      <TouchableOpacity
        onPress={() => {
          setItem(item);
          setDeliveryTime([minDeliveryTime, maxDeliveryTime]);
          setFee(fee);
          setRestaurantName(name);
        }}
      >
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
