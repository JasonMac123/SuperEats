import { View, Text } from "react-native";
import React from "react";
import useFoodItem from "../../hooks/useFoodItem";
import { useCart } from "../../hooks/useCart";

const foodItem = () => {
  const { item, setItem } = useFoodItem();

  const { addProduct, reduceProduct } = useCart();

  return (
    <View>
      <Text>{item?.name}</Text>
    </View>
  );
};

export default foodItem;
