import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";

import Header from "../components/Header";
import Categories from "../components/Category/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      <Header />
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{ paddingBottom: 100 }}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
