import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

import { Restaurant } from "../../constants/types";

interface RestaurantProps {
  data: Restaurant;
}

import tw from "twrnc";

const RestaurantCard = ({ data }: RestaurantProps) => {
  return (
    <Link href={"/"} asChild>
      <TouchableOpacity style={tw`bg-white`}>
        <View key={data.name} style={tw`mx-1 h-80 w-60`}>
          <Image source={data.img} />
          <View>
            <Text style={tw`font-semibold text-sm text-center shadow-md`}>
              {data.name}
            </Text>
            <Text style={tw`font-semibold text-sm text-center shadow-md`}>
              {data.rating}
              <Entypo name="star" size={24} color="yellow" /> (
              {data.numberOfRatings})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default RestaurantCard;
