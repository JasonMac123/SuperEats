import { FlatList, SafeAreaView, Switch, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import tw from "twrnc";

import { useCart } from "../../hooks/useCart";
import ProductCard from "../../components/ProductCard";
import { getDeliveryTime } from "../../functions/getDeliveryTime";
import CartFooter from "../../components/CartFooter";
import ToggleFeature from "../../components/ToggleFeature";

const Cart = () => {
  const {
    products,
    deliveryTime,
    quantity,
    total,
    addProduct,
    reduceProduct,
    clearCart,
  } = useCart();

  const orderFood = () => {
    clearCart();
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`mx-4 my-4`}>
        <Text style={tw`text-2xl mt-4`}>Delivery</Text>
        <View style={tw`flex-row`}>
          <MaterialIcons name="delivery-dining" size={32} color="black" />
          <Text style={tw`flex-1 mx-2`}>
            Deliver from {getDeliveryTime(deliveryTime).join(" - ")} minutes{" "}
          </Text>
          <Text style={tw`text-green-600 text-xl`}>Change</Text>
        </View>
      </View>
      <ToggleFeature
        title="Add Cutlery?"
        description="Help save the environment and cut down on environmental waste!"
      />
      <FlatList
        data={products}
        ListHeaderComponent={() => (
          <Text style={tw`text-xl my-2 pl-4`}>Items</Text>
        )}
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
        ListFooterComponent={
          <View>
            <View style={tw`flex-row justify-between mx-2`}>
              <Text>Subtotal</Text>
              <Text>${total}</Text>
            </View>
          </View>
        }
      />
      <CartFooter orderFood={orderFood} />
    </SafeAreaView>
  );
};

export default Cart;
