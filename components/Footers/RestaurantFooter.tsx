import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";
import { Link } from "expo-router";

interface RestaurantFooterProps {
  quantity: number;
  total: number;
}

const RestaurantFooter = ({ quantity, total }: RestaurantFooterProps) => {
  return (
    <View style={styles.footer}>
      <Link href={"/cart"} asChild>
        <TouchableOpacity style={tw`bg-green-700 px-4 py-6 rounded-md`}>
          <View style={tw`flex-row justify-center gap-4`}>
            <Text style={tw`text-white text-lg`}>
              View Cart ( {quantity} ) items
            </Text>
            <Text style={tw`text-white text-lg`}>
              Total: ${total.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default RestaurantFooter;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 30,
    elevation: 10,
    borderTopColor: "grey",
    borderTopWidth: 2,
  },
});
