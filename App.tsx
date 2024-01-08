import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationBar from "./screens/NavigationBar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FilterModal from "./components/FilterModal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Bottom Navigation"
              component={NavigationBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="/(modal)/filter"
              component={FilterModal}
              options={{
                presentation: "modal",
                headerTitle: "Search filters",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
