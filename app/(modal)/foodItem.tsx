import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import useFoodItem from "../../hooks/useFoodItem";
import { useCart } from "../../hooks/useCart";

import tw from "twrnc";
import { FoodItem } from "../../constants/types";

const foodItem = () => {
  const { item } = useFoodItem();

  const { addProduct, reduceProduct } = useCart();

  const addToCart = (item: FoodItem) => {};

  return (
    <View style={tw`flex-1`}>
      <Image source={{ uri: item?.img }} width={400} height={300} />
      <View style={tw`p-4`}>
        <Text style={tw`text-5xl`}>{item?.name}</Text>
        <Text style={tw`text-lg text-neutral-600`}>{item?.info}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity
            style={tw`h-12 px-4 rounded-md bg-green-700 items-center justify-center`}
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
