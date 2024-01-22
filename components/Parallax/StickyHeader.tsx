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
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {sectionData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                index === activeSection ? styles.activeButton : styles.button
              }
              onPress={() => setActiveSection(index)}
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    width: "100%",
  },
  container: {
    justifyContent: "center",
    paddingTop: 10,
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
  text: { color: "#15803d", fontSize: 16 },
});
