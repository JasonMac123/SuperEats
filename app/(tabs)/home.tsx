import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";

import Header from "../../components/Header";
import Categories from "../../components/Category/Categories";
import Restaurants from "../../components/Restaurant/Restaurants";

const Index = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-neutral-200 pt-5`}>
      <Header />
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <Text style={tw`font-semibold text-xl ml-4`}>Top picks near you!</Text>
        <Restaurants />
        <Text style={tw`font-semibold text-xl ml-4`}>Deals!</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
