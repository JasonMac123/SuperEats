import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard img="" title="Testing" />
      <FeaturedRow
        title="Featured"
        description="Some of our best eats!"
        featuredCategory="Featured"
      />
    </ScrollView>
  );
};

export default Categories;
