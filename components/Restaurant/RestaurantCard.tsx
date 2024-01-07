import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import tw from "twrnc";

const RestaurantCard = ({
  id,
  img,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow-sm`}>
      <Image
        source={{
          uri: img,
        }}
        style={tw`h-36 w-64 rounded-md`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center gap-2`}>
          <FontAwesome name="star-o" size={24} color="yellow" />
          <Text style={tw`text-xs text-gray-500`}>
            <Text style={tw`text-yellow-700`}>{rating}</Text> - {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <Entypo name="location" size={24} color="black" />
          <Text style={tw`text-xs`}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
