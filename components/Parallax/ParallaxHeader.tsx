import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";

import ParallaxScrollView from "./ParallaxScrollView";
import { useNavigation } from "expo-router";

interface ParallaxHeaderProps {
  img: string;
}

const ParallaxHeader = ({ img }: ParallaxHeaderProps) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
    });
  });

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
