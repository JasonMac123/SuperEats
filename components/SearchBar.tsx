import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import tw from "twrnc";

const SearchBar = () => {
  return (
    <View style={tw`flex-row items-center gap-2 pb-2 mx-4`}>
      <View style={tw`flex-row flex-1 gap-2 bg-gray-200 p-3`}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          placeholder="Search food places here!"
          keyboardType="default"
        />
      </View>
      <Link href={""} asChild>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="black" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SearchBar;
