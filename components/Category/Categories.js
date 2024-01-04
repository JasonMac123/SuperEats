import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import FeaturedRestaurant from "./FeaturedRestaurant";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard img="" title="Testing" />
      <FeaturedRestaurant
        title="Featured"
        description="Some of our best eats!"
        img=""
      />
    </ScrollView>
  );
};

export default Categories;
