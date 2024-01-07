import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationBar from "./screens/NavigationBar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomSheetModalProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={NavigationBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
