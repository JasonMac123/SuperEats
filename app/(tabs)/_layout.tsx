import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Tabs, useNavigation } from "expo-router";
import { useCart } from "../../hooks/useCart";

const Layout = () => {
  const navigation = useNavigation();
  const { quantity } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 220,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.focusedIcon}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name={"user"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.focusedIcon}
              />
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={28} color={"green"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name={"cart-sharp"}
                  size={24}
                  color={"black"}
                  style={!focused ? styles.icon : styles.focusedIcon}
                />
                {quantity > 0 && <View style={styles.cartNotification} />}
              </>
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={28} color={"green"} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    opacity: 0.2,
  },
  focusedIcon: {
    opacity: 100,
  },
  cartNotification: {
    position: "absolute",
    bottom: 37,
    right: 50,
    width: 10,
    height: 10,
    borderRadius: 16,
    backgroundColor: "#FF0000",
  },
});

export default Layout;
