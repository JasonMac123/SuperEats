import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { FoodItem } from "../../constants/types";

type Section = {
  title: string;
  data: FoodItem[];
};

interface StickyHeaderProps {
  sectionData: Section[];
  scrollRef: React.RefObject<ScrollView>;
  itemsRef: React.MutableRefObject<TouchableOpacity[]>;
  activeSection: number;
  selectSection: (index: number) => void;
}

const StickyHeader = ({
  sectionData,
  scrollRef,
  itemsRef,
  selectSection,
  activeSection,
}: StickyHeaderProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, alignItems: "center" }}
        style={styles.scrollView}
      >
        {sectionData.map((item, index) => (
          <TouchableOpacity
            ref={(ref) => (itemsRef.current[index] = ref!)}
            key={index}
            style={
              index === activeSection ? styles.activeButton : styles.button
            }
            onPress={() => selectSection(index)}
          >
            <Text
              style={index === activeSection ? styles.activeText : styles.text}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default StickyHeader;

const styles = StyleSheet.create({
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
  scrollView: {
    paddingHorizontal: 16,
    gap: 10,
    paddingBottom: 4,
  },
  activeText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  text: { color: "#15803d", fontSize: 16 },
});
