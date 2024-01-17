import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";

import ParallaxScrollView from "./ParallaxScrollView";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

interface ParallaxHeaderProps {
  img: string;
  name: string;
}

const ParallaxHeader = ({ img, name }: ParallaxHeaderProps) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: "#15803d",
      headerLeft: () => (
        <TouchableOpacity
          style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" color="#15803d" size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={tw`flex-row items-center justify-center gap-4`}>
          <TouchableOpacity
            style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
          >
            <Ionicons name="share-outline" color="#15803d" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
          >
            <Ionicons name="search-outline" color="#15803d" size={24} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <ParallaxScrollView
      backgroundColor={"#fff"}
      parallaxHeaderHeight={300}
      stickyHeaderHeight={110}
      style={{ flex: 1 }}
      renderBackground={() => (
        <Image source={{ uri: img }} style={{ width: 400, height: 500 }} />
      )}
      renderStickyHeader={() => (
        <View key="sticky-header" style={tw`ml-20`}>
          <Text style={tw`text-2xl mt-14`}>{name}</Text>
        </View>
      )}
    ></ParallaxScrollView>
  );
};

export default ParallaxHeader;
