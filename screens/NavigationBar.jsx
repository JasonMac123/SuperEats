import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import CartScreen from "./CartScreen";

import tw from "twrnc";

const Tab = createBottomTabNavigator();

const screenOptions = {
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
};

const NavigationBar = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
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
                style={!focused ? tw`opacity-20` : ""}
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
                style={!focused ? tw`opacity-20` : ""}
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
                style={!focused ? tw`opacity-20` : ""}
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
                style={!focused ? tw`opacity-20` : ""}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBar;
