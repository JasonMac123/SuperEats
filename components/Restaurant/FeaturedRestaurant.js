import { View, Text, ScrollView } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

import RestaurantCard from "./RestaurantCard";

const FeaturedRestaurant = ({ title, description, img }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id={123}
          img={""}
          title={"Sushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Grand"}
          shortDescription={"Description"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRestaurant;
