import React from "react";
import { StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Tabs } from "expo-router";

const Layout = () => {
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
        name="search"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search"}
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
              <Ionicons
                name={"cart-sharp"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.focusedIcon}
              />
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
});

export default Layout;
