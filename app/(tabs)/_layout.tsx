import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Tabs } from "expo-router";
import { useCart } from "../../hooks/useCart";

const Layout = () => {
  const { quantity } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
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
                {quantity > 0 && (
                  <View style={styles.cartNotification}>
                    <Text style={styles.cartNumber}>{quantity}</Text>
                  </View>
                )}
              </>
            );
          },
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
  cartNumber: {
    color: "#fff",
  },
  cartNotification: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#1CB91C",
  },
});

export default Layout;
