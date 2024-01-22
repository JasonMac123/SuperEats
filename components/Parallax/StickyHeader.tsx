import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import Animated from "react-native-reanimated";
import tw from "twrnc";

import { FoodItem } from "../../constants/types";

type Section = {
  title: string;
  data: FoodItem[];
};

interface StickyHeaderProps {
  sectionData: Section[];
}

const StickyHeader = ({ sectionData }: StickyHeaderProps) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Animated.View style={styles.stickyHeader}>
      <View style={tw`flex-1`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={styles.scrollView}
        >
          {sectionData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                index === activeSection ? styles.activeButton : styles.button
              }
            >
              <Text
                style={
                  index === activeSection ? styles.activeText : styles.text
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default StickyHeader;

const styles = StyleSheet.create({
  stickyHeader: {
    position: "absolute",
    right: 0,
    height: 50,
    left: 0,
    top: 110,
    backgroundColor: "#fff",
  },
  scrollView: {
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  activeButton: {
    backgroundColor: "#15803d",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  activeText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  text: { color: "#000", fontSize: 16 },
});
