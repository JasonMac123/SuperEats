import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";
import Header from "../components/Header";

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
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
