import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";

import React, { useState, useEffect } from "react";
import { useNavigation } from "expo-router";

import tw from "twrnc";
import ItemBox from "../../components/ItemBox";
import firebase_app from "../../firebase/config";

import { getFirestore, getDocs, collection, orderBy } from "firebase/firestore";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const FilterModal = () => {
  const navigation = useNavigation();
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    let items: any = [];
    const db = getFirestore(firebase_app);
    const categorySnapshot = collection(db, "categories");

    getDocs(categorySnapshot)
      .then((data: any) => {
        data.forEach((doc: any) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setFilterItems(items);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={tw`p-8 bg-white h-full`}>
      <FlatList
        data={filterItems}
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
