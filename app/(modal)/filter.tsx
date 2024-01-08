import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import ItemBox from "../../components/ItemBox";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const FilterModal = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={tw`p-8 bg-white`}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={tw`h-16 mx-4 items-center justify-center bg-green-700 rounded-md`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`text-white text-xl font-bold`}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: "#FFF",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
});
