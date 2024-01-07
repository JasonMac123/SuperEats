import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import CartScreen from "./CartScreen";

const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name={"user"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"cart-sharp"}
                size={24}
                color={"black"}
                style={!focused ? styles.icon : styles.icon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
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

export default NavigationBar;
