import { Stack, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
            }}
          />
          <Stack.Screen
            name="(modal)/foodItem"
            options={{
              headerTitle: "",
              presentation: "modal",
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
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
