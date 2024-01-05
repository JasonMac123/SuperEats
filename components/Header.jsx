import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import tw from "twrnc";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <View style={tw`flex-row pb-3 items-center mx-4 gap-2`}>
        <Ionicons name="fast-food" size={40} color="green" />
        <View style={tw`flex-1`}>
          <TouchableOpacity>
            <Text style={tw`font-bold text-gray-400 text-xs`}>
              Deliver now!
            </Text>
            <Text style={tw`font-bold text-xl`}>
              Current Location
              <AntDesign
                name="down"
                size={18}
                color="#00CCB8"
                style={tw`ml-10`}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="user-alt" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </>
  );
};

export default Header;
