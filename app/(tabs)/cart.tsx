import { FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useCart } from "../../hooks/useCart";
import ProductCart from "../../components/ProductCart";

const Cart = () => {
  const { products, quantity, total, addProduct, reduceProduct, clearCart } =
    useCart();

  return (
    <SafeAreaView>
      <FlatList data={products} renderItem={ProductCart}></FlatList>
    </SafeAreaView>
  );
};

export default Cart;
