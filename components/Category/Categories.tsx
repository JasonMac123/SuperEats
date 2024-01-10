import { ScrollView, View, Text } from "react-native";
import React from "react";

import { categories } from "../../constants/data";

interface Category {
  name: string;
  img: string;
}

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category: Category) => (
        <View key={category.name}>
          <Text>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
