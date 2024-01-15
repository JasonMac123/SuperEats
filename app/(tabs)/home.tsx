import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";

import Header from "../../components/Header";
import Categories from "../../components/Category/Categories";
import Restaurants from "../../components/Restaurant/Restaurants";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={tw`bg-white pt-5 flex-1`}>
        <Header />
        <Categories />
        <ScrollView
          style={tw`bg-gray-100`}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text style={tw`font-semibold text-xl mt-2 ml-4`}>
            Top picks near you!
          </Text>
          <Restaurants featured />
          <Text style={tw`font-semibold text-xl ml-4`}>Deals!</Text>
          <Restaurants />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
