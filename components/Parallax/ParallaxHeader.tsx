import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import tw from "twrnc";
import { Restaurant } from "../../constants/types";

import ParallaxScrollView from "./ParallaxScrollView";
import FoodItemCard from "../Cards/FoodItemCard";
import StickyHeader from "./StickyHeader";

interface ParallaxHeaderProps {
  data: Restaurant;
}

const ParallaxHeader = ({ data }: ParallaxHeaderProps) => {
  const [activeSection, setActiveSection] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);
  const sectionListRef = useRef<SectionList>(null);

  const sectionData = data.meals.map((item, index) => ({
    title: item.categoryName,
    data: item.foodItems,
    index,
  }));

  const selectSection = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveSection(index);

    selected.measure((x, y, width, height, pageX, pageY) => {
      scrollRef.current?.scrollTo({ x: x - 16 });
    });

    sectionListRef.current?.scrollToLocation({
      itemIndex: 0,
      sectionIndex: index,
    });
  };

  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onScroll = (event: any) => {
    const scrollDistance = event.nativeEvent.contentOffset.y;

    if (scrollDistance > 250) {
      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    }
  };

  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        parallaxHeaderHeight={300}
        stickyHeaderHeight={110}
        style={{ flex: 1 }}
        renderBackground={() => (
          <Image
            source={{ uri: data.img }}
            style={{ width: 400, height: 500 }}
          />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={tw`ml-20`}>
            <Text style={tw`text-2xl mt-14`}>{data.name}</Text>
          </View>
        )}
        scrollEvent={onScroll}
      >
        <View>
          <Text style={tw`text-2xl ml-8 mt-2 `}>
            {data.name}{" "}
            <Text style={tw`text-base`}>
              {data.rating}
              <Entypo name="star" size={16} color="green" /> (
              {data.numberOfRatings})
            </Text>
          </Text>
          <Text style={tw`text-sm ml-8 mb-2 text-neutral-500`}>
            ${data.fee} delivery fee, {data.minDeliveryTime}-
            {data.maxDeliveryTime} min delivery time
          </Text>
          <Text style={tw`text-neutral-600 mx-4 mb-2`}>{data.description}</Text>
          <SectionList
            ref={sectionListRef}
            keyExtractor={(item, index) => `${item.name + index}`}
            scrollEnabled={false}
            sections={sectionData}
            renderItem={({ item }) => (
              <FoodItemCard
                item={item}
                minDeliveryTime={data.minDeliveryTime}
                maxDeliveryTime={data.maxDeliveryTime}
                fee={data.fee}
                name={data.name}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.sectionHeader}>
                <Text style={tw`text-2xl font-semibold`}>{title}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
            SectionSeparatorComponent={() => (
              <View style={styles.itemSeperator} />
            )}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.animatedContainer, animatedStyles]}>
        <StickyHeader
          sectionData={sectionData}
          scrollRef={scrollRef}
          itemsRef={itemsRef}
          activeSection={activeSection}
          selectSection={selectSection}
        />
      </Animated.View>
    </>
  );
};

export default ParallaxHeader;

const styles = StyleSheet.create({
  animatedContainer: {
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
  itemSeperator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 4,
  },
  sectionHeader: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 2,
    paddingHorizontal: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
