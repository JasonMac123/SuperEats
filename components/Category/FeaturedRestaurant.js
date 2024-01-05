import { View, Text } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

const FeaturedRestaurant = ({ title, description, img }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
    </View>
  );
};

export default FeaturedRestaurant;
