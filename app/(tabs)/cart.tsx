import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import tw from "twrnc";

import { useCart } from "../../hooks/useCart";
import { useRestaurant } from "../../hooks/useRestaurant";
import { getDeliveryTime } from "../../functions/getDeliveryTime";

import ProductCard from "../../components/Cards/ProductCard";
import CartFooter from "../../components/Footers/CartFooter";
import ToggleFeature from "../../components/ToggleFeature";

const Cart = () => {
  const { products, total, quantity, addProduct, reduceProduct, clearCart } =
    useCart();
  const { deliveryTime, fee, restaurantOrderName } = useRestaurant();

  const orderFood = () => {
    clearCart();
  };

  if (quantity < 1) {
    return (
      <SafeAreaView>
        <View style={tw`h-full items-center justify-center gap-4`}>
          <MaterialCommunityIcons name="shopping" size={80} color={"green"} />
          <Text style={tw`w-80 text-center text-lg`}>
            You have no items in your cart, add some items to your cart!
          </Text>
          <Link href={`/home`} asChild>
            <TouchableOpacity>
              <View
                style={tw`bg-green-700 rounded-lg px-4 py-2 items-center justify-center h-14 w-70`}
              >
                <Text style={tw`text-white text-xl font-semibold`}>
                  Checkout Restaurants
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={tw`flex-1`}>
      <View style={tw`gap-4 `}>
        <Text style={tw`text-2xl mt-2 mx-4`}>
          {restaurantOrderName} - Delivery
        </Text>
        <View style={tw`flex-row bg-white py-4 px-4 border border-gray-400`}>
          <MaterialIcons name="delivery-dining" size={32} color="black" />
          <Text style={tw`flex-1 mx-2`}>
            Deliver from {getDeliveryTime(deliveryTime).join(" - ")} minutes{" "}
          </Text>
          <Text style={tw`text-green-600 text-xl`}>Change</Text>
        </View>
        <ToggleFeature
          title="Add Cutlery?"
          description="Help save the environment and cut down on environmental waste!"
        />
      </View>
      <FlatList
        data={products}
        ListHeaderComponent={() => (
          <Text style={tw`flex-1 text-3xl mt-2 mb-2 pl-4`}>Items</Text>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 1, backgroundColor: "#FCFCFC", marginVertical: 4 }}
          />
        )}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            addToCart={addProduct}
            reduceProduct={reduceProduct}
          />
        )}
        ListFooterComponent={
          <View style={tw`bg-white mx-4`}>
            <View style={tw`flex-row justify-between mx-2 mt-4`}>
              <Text style={tw`text-xl text-neutral-400`}>Subtotal</Text>
              <Text style={tw`text-lg`}>${total.toFixed(2)}</Text>
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
                ${(total + 2.99 + fee + total * 1.13).toFixed(2)}
              </Text>
            </View>
          </View>
        }
      />
      <CartFooter orderFood={orderFood} />
    </View>
  );
};

export default Cart;
