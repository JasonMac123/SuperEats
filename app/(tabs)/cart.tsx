import { FlatList, SafeAreaView, Text, View } from "react-native";
import React from "react";

import tw from "twrnc";

import { useCart } from "../../hooks/useCart";

import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const { products, quantity, total, addProduct, reduceProduct, clearCart } =
    useCart();

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        ListHeaderComponent={<Text style={tw`text-xl my-2 pl-4`}>Items</Text>}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#FCFCFC" }} />
        )}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            addToCart={addProduct}
            reduceProduct={reduceProduct}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Cart;
