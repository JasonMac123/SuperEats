import { ScrollView, View, Text, Image } from "react-native";
import React from "react";

import tw from "twrnc";

import { categories } from "../../constants/data";

interface Category {
  name: string;
  img: any;
}

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`gap-4 bg-white`}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {categories.map((category: Category) => (
        <View key={category.name} style={tw`mx-1`}>
          <Image source={category.img} />
          <Text style={tw`font-semibold text-sm text-center shadow-md mb-4`}>
            {category.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
