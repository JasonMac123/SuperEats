import { SafeAreaView, View, Text } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import tw from "twrnc";
import IconCard from "../../components/Cards/IconCard";

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex-row mx-4`}>
        <Text>Name</Text>
        <FontAwesome name="user" size={24} color="black" />
      </View>
      <View style={tw`flex-row`}>
        <IconCard entypoIconName="shopping-basket" label="Past Orders" />
        <IconCard entypoIconName="credit-card" label="Payment Options" />
        <IconCard entypoIconName="price-tag" label="Offers and Coupons" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
