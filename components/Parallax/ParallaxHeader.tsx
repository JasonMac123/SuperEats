import { View, Text, Image, TouchableOpacity, SectionList } from "react-native";
import React, { useLayoutEffect } from "react";

import { useNavigation } from "expo-router";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

import ParallaxScrollView from "./ParallaxScrollView";
import { Restaurant } from "../../constants/types";

interface ParallaxHeaderProps {
  data: Restaurant;
}

const ParallaxHeader = ({ data }: ParallaxHeaderProps) => {
  const navigation = useNavigation();

  const sectionData = data.meals.map((item, index) => ({
    title: item.categoryName,
    data: item.foodItems,
    index,
  }));

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
        <Image source={{ uri: data.img }} style={{ width: 400, height: 500 }} />
      )}
      renderStickyHeader={() => (
        <View key="sticky-header" style={tw`ml-20`}>
          <Text style={tw`text-2xl mt-14`}>{data.name}</Text>
        </View>
      )}
    >
      <View>
        <Text style={tw`text-2xl ml-8 mt-2 `}>
          {data.name}{" "}
          <Text style={tw`text-base`}>
            {data.rating}
            <Entypo name="star" size={16} color="green" /> (
            {data.numberOfRatings})
          </Text>
        </Text>
        <Text style={tw`text-sm ml-8 mb-2 text-neutral-500`}>
          ${data.fee} delivery fee, {data.minDeliveryTime}-
          {data.maxDeliveryTime} min delivery time
        </Text>
        <Text style={tw`text-neutral-600 mx-4 mb-2`}>{data.description}</Text>
        <SectionList
          keyExtractor={(item, index) => `${item.name + index}`}
          scrollEnabled={false}
          sections={sectionData}
          renderItem={({ item }) => (
            <View style={tw`flex-row justify-between mx-4`}>
              <View>
                <Text style={tw`text-neutral-700 text-xl`}>
                  {item.name}
                  <Text style={tw`text-neutral-500 text-lg`}>{item.price}</Text>
                </Text>
                <Text style={tw`text-neutral-400`}>{item.info}</Text>
              </View>
              <Image source={{ uri: item.img }} width={100} height={100} />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                paddingBottom: 2,
                paddingHorizontal: 8,
                marginBottom: 10,
                marginHorizontal: 20,
              }}
            >
              <Text style={tw`text-2xl font-semibold`}>{title}</Text>
            </View>
          )}
        />
      </View>
    </ParallaxScrollView>
  );
};

export default ParallaxHeader;
