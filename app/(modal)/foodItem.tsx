import { View, Text, Image } from "react-native";
import React from "react";
import useFoodItem from "../../hooks/useFoodItem";
import { useCart } from "../../hooks/useCart";

import tw from "twrnc";

const foodItem = () => {
  const { item } = useFoodItem();

  const { addProduct, reduceProduct } = useCart();

  return (
    <View>
      <Image source={{ uri: item?.img }} width={400} height={300} />
      <View style={tw`p-4`}>
        <Text style={tw`text-5xl`}>{item?.name}</Text>
      </View>
    </View>
  );
};

export default foodItem;
