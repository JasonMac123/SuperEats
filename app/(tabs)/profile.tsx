import { SafeAreaView, View, Text } from "react-native";
import React from "react";

import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";

import tw from "twrnc";

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex-row mx-4`}>
        <Text>Name</Text>
        <FontAwesome name="user" size={24} color="black" />
      </View>
      <View style={tw`flex-row`}>
        <View>
          <Entypo name="price-tag" size={24} color="black" />
          <Text>Past Orders</Text>
        </View>
        <View>
          <Entypo name="credit-card" size={24} color="black" />
          <Text>Payment Options</Text>
        </View>
        <View>
          <Entypo name="price-tag" size={24} color="black" />
          <Text>Past Orders</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
