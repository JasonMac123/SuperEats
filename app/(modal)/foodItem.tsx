import { View, Text } from "react-native";
import React from "react";
import useFoodItem from "../../hooks/useFoodItem";

const foodItem = () => {
  const { item, setItem } = useFoodItem();

  return (
    <View>
      <Text>{item?.name}</Text>
    </View>
  );
};

export default foodItem;
