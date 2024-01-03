import React from "react";
import { View, Text, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import tw from "twrnc";

const Header = () => {
  return (
    <>
      <View style={tw`flex-row pb-3 items-center mx-4 gap-2`}>
        <Ionicons name="fast-food" size={40} color="green" />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location <AntDesign name="down" size={18} color="#00CCB8" />
          </Text>
        </View>
        <FontAwesome5 name="user-alt" size={24} color="black" />
      </View>
      <View style={tw`flex-row items-center gap-2 pb-2 mx-4`}>
        <View style={tw`flex-row flex-1 gap-2 bg-gray-200 p-3`}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            placeholder="Search food places here!"
            keyboardType="default"
          />
        </View>
        <Ionicons name="settings" size={24} color="black" />
      </View>
    </>
  );
};

export default Header;
