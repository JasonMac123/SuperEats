import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";
import { Link } from "expo-router";

interface CartFooterProps {
  orderFood: () => void;
}

const CartFooter = ({ orderFood }: CartFooterProps) => {
  return (
    <View style={styles.footer}>
      <Link href={"/cart"} asChild>
        <TouchableOpacity
          style={tw`bg-green-700 px-4 py-4 rounded-md`}
          onPress={() => orderFood()}
        >
          <View style={tw`flex-row justify-center gap-4`}>
            <Text style={tw`text-white`}>Purchase</Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 100,
    left: 0,
    width: "100%",
    padding: 20,
    elevation: 10,
    borderTopColor: "grey",
    borderTopWidth: 2,
  },
});
