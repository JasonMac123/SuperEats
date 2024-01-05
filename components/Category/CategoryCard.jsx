import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";

const CategoryCard = ({ img, title }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image source={{ uri: img }} style={tw`h-20 w-20 rounded`} />
      <Text style={tw`abssolute bottom-1 left-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
