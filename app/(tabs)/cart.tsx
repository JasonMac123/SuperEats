import { FlatList, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import tw from "twrnc";

import { useCart } from "../../hooks/useCart";
import { useRestaurant } from "../../hooks/useRestaurant";
import { getDeliveryTime } from "../../functions/getDeliveryTime";

import ProductCard from "../../components/Cards/ProductCard";
import CartFooter from "../../components/Footers/CartFooter";
import ToggleFeature from "../../components/ToggleFeature";

const Cart = () => {
  const { products, total, addProduct, reduceProduct, clearCart } = useCart();
  const { deliveryTime, fee } = useRestaurant();

  const orderFood = () => {
    clearCart();
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw` my-4`}>
        <Text style={tw`text-2xl mt-4 mx-4`}>Delivery</Text>
        <View style={tw`flex-row bg-white py-4 px-4 border border-gray-400`}>
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
          <View style={tw`bg-white`}>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Subtotal</Text>
              <Text style={tw`text-lg`}>${total}</Text>
            </View>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Service Fee</Text>
              <Text style={tw`text-lg`}>$2.99</Text>
            </View>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Delivery Fee</Text>
              <Text style={tw`text-lg`}>${(total * 1.13).toFixed(2)}</Text>
            </View>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Tax</Text>
              <Text style={tw`text-lg`}>${fee}</Text>
            </View>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Delivery Fee</Text>
              <Text style={tw`text-lg`}>
                ${total + 2.99 + fee + (total * 1.13).toFixed(2)}
              </Text>
            </View>
          </View>
        }
      />
      <CartFooter orderFood={orderFood} />
    </SafeAreaView>
  );
};

export default Cart;
