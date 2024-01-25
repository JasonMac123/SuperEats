import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInLeft } from "react-native-reanimated";
import tw from "twrnc";

import { FoodItem } from "../../constants/types";

import useFoodItem from "../../hooks/useFoodItem";
import { useCart } from "../../hooks/useCart";
import { useNavigation } from "expo-router";

const foodItem = () => {
  const navigation = useNavigation();

  const { item, deliveryTime } = useFoodItem();

  const { addProduct, setTime } = useCart();

  const addToCart = (item: FoodItem) => {
    addProduct(item);
    navigation.goBack();
  };

  return (
    <View style={tw`flex-1`}>
      <Animated.Image
        entering={FadeInLeft.duration(500).delay(400)}
        source={{ uri: item?.img }}
        width={400}
        height={300}
      />
      <View style={tw`p-4`}>
        <Animated.Text
          entering={FadeInLeft.duration(500).delay(400)}
          style={tw`text-5xl`}
        >
          {item?.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInLeft.duration(500).delay(400)}
          style={tw`text-lg text-neutral-600`}
        >
          {item?.info}
        </Animated.Text>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity
            style={tw`h-12 px-4 rounded-md bg-green-700 items-center justify-center`}
            onPress={() => {
              addToCart(item!);
              setTime(deliveryTime);
            }}
          >
            <Text style={tw`text-white font-semibold`}>
              Add to Cart ${item?.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default foodItem;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    width: "100%",
    padding: 30,
    elevation: 10,
    borderTopColor: "grey",
    borderTopWidth: 2,
  },
});
