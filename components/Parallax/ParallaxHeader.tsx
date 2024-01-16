import { View, Text, Image } from "react-native";
import React from "react";

import ParallaxScrollView from "./ParallaxScrollView";

interface ParallaxHeaderProps {
  img: string;
}

const ParallaxHeader = ({ img }: ParallaxHeaderProps) => {
  return (
    <ParallaxScrollView
      backgroundColor={"#fff"}
      parallaxHeaderHeight={300}
      stickyHeaderHeight={50}
      style={{ flex: 1 }}
      renderBackground={() => <Image source={{ uri: img }} />}
      renderStickyHeader={() => (
        <View key="sticky-header">
          <Text>Details</Text>
        </View>
      )}
    ></ParallaxScrollView>
  );
};

export default ParallaxHeader;
