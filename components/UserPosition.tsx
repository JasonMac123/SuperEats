import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import usePosition from "../hooks/usePosition";
import * as Location from "expo-location";

import { AntDesign } from "@expo/vector-icons";

import tw from "twrnc";

const UserPosition = () => {
  const { setPosition } = usePosition();
  const [address, setAddress] = useState("");

  const geocode = async (address: string) => {
    const geocodedLocation = await Location.geocodeAsync(address);
    setPosition(geocodedLocation[0].latitude, geocodedLocation[0].longitude);
  };

  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-lg ml-10`}>Address</Text>
      <View style={tw`flex-row bg-neutral-200 py-4 px-4 items-center mx-8`}>
        <TextInput
          placeholder="Enter your address"
          onChangeText={(text) => setAddress(text)}
          keyboardType="default"
          placeholderTextColor={"#000"}
          style={tw`flex-1 font-semibold`}
        />
        <TouchableOpacity onPress={() => geocode(address)}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserPosition;
