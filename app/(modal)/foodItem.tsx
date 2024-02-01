import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInLeft } from "react-native-reanimated";
import tw from "twrnc";

import { AntDesign } from "@expo/vector-icons";

import { FoodItem } from "../../constants/types";

import useFoodItem from "../../hooks/useFoodItem";
import { useCart } from "../../hooks/useCart";
import { useNavigation } from "expo-router";
import { useRestaurant } from "../../hooks/useRestaurant";

const foodItem = () => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState<number>(1);

  const { item, deliveryTime, fee, restaurantName } = useFoodItem();
  const { restaurantOrderName, setRestaurantOrderName, setFee, setTime } =
    useRestaurant();
  const { quantity, addProduct } = useCart();

  const addToCart = (item: FoodItem) => {
    if (!restaurantOrderName || quantity === 0) {
      setRestaurantOrderName(restaurantName);
      addProduct(item);
      setTime(deliveryTime);
      setFee(fee);
      return navigation.goBack();
    }

    if (restaurantName === restaurantOrderName) {
      addProduct(item);
      navigation.goBack();
    } else {
    }
  };

  const handleCounter = (change: number) => {
    if (change + counter <= 0) {
      return;
    }
    setCounter(change + counter);
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
        <View style={tw`mt-4 flex-row justify-between`}>
          <Text style={tw`text-xl`}>Quantity</Text>
          <View style={tw`flex-row`}>
            <TouchableOpacity onPress={() => handleCounter(1)}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={() => handleCounter(-1)}>
              <AntDesign name="minuscircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity
            style={tw`h-12 px-4 rounded-md bg-green-700 items-center justify-center`}
            onPress={() => {
              addToCart(item!);
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
