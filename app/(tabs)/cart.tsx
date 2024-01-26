import { FlatList, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import tw from "twrnc";

import { useCart } from "../../hooks/useCart";
import ProductCard from "../../components/ProductCard";
import { getDeliveryTime } from "../../functions/getDeliveryTime";

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

  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-2xl`}>Delivery</Text>
        <View style={tw`flex-row`}>
          <MaterialIcons name="delivery-dining" size={24} color="black" />
          <Text>
            Deliver from {getDeliveryTime(deliveryTime).join(" - ")} minutes{" "}
          </Text>
          <Text style={tw`text-green-600`}>Change</Text>
        </View>
      </View>
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
    </SafeAreaView>
  );
};

export default Cart;
