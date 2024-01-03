import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`flex-row pb-3 items-center mx-4 gap-2`}>
        <Ionicons name="fast-food" size={40} color="green" />
        <View>
          <Text>Deliver now!</Text>
          <Text>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
