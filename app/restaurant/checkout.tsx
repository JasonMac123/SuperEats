import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";
import { Link } from "expo-router";

const checkout = () => {
  return (
    <View style={tw`h-screen items-center justify-center`}>
      <Text style={tw`text-3xl font-bold`}>Thanks for your order!</Text>
      <Link href={"/(tabs)/home"} asChild>
        <TouchableOpacity style={tw`bg-green-700 px-4 py-2 rounded-lg`}>
          <Text style={tw`text-white font-semibold`}>New Order</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default checkout;
