import { Stack, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              headerTitle: "Search Filters",
              presentation: "modal",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#FCFCFC",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons name="close-outline" size={28} color={"green"} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="restaurant/[restaurantId]"
            options={{
              presentation: "card",
              headerShadowVisible: false,
              headerTransparent: true,
              headerTitle: "",
              headerTintColor: "#15803d",
              headerLeft: () => (
                <TouchableOpacity
                  style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="arrow-back" color="#15803d" size={24} />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={tw`flex-row items-center justify-center gap-4`}>
                  <TouchableOpacity
                    style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
                  >
                    <Ionicons name="share-outline" color="#15803d" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`w-12 h-12 rounded-full bg-white justify-center items-center border border-green-700`}
                  >
                    <Ionicons name="search-outline" color="#15803d" size={24} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/foodItem"
            options={{
              headerTitle: "",
              headerTransparent: true,
              presentation: "modal",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={tw`bg-white rounded-full w-12 h-12 justify-center items-center`}
                >
                  <Ionicons name="close-outline" size={28} color={"green"} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
