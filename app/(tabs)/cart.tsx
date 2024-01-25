import { FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useCart } from "../../hooks/useCart";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const { products, quantity, total, addProduct, reduceProduct, clearCart } =
    useCart();

  return (
    <SafeAreaView>
      <FlatList
        data={products}
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
