import { View, Text } from "react-native";
import React from "react";

import ParallaxScrollView from "./ParallaxScrollView";

const ParallaxHeader = () => {
  return (
    <ParallaxScrollView
      backgroundColor={"red"}
      parallaxHeaderHeight={300}
      style={{ flex: 1 }}
    >
      <View style={{ height: 500 }}>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>
  );
};

export default ParallaxHeader;
