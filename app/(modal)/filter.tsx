import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListRenderItem,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  getFirestore,
  getDocs,
  collection,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigation } from "expo-router";

import tw from "twrnc";
import ItemBox from "../../components/Layout/ItemBox";
import firebase_app from "../../firebase/config";

import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Category {
  name: string;
  count: number;
  id: string;
  checked?: boolean;
}

const FilterModal = () => {
  const navigation = useNavigation();
  const [filterItems, setFilterItems] = useState<Category[]>([]);

  useEffect(() => {
    let items: any = [];
    const db = getFirestore(firebase_app);
    const categorySnapshot = collection(db, "categories");

    getDocs(query(categorySnapshot, orderBy("name")))
      .then((data: any) => {
        data.forEach((doc: any) => {
          items.push({ ...doc.data(), id: doc.id, checked: false });
        });
        setFilterItems(items);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const clearAllFilters = () => {
    const updatedItems = filterItems.map((item) => {
      item.checked = false;

      return item;
    });

    setFilterItems(updatedItems);
  };

  const renderItem: ListRenderItem<Category> = ({ item, index }) => {
    return (
      <View
        style={tw`flex-row items-center justify-between py-2 pl-4 bg-white`}
      >
        <Text style={tw`font-semibold text-lg`}>
          {item.name} ({item.count})
        </Text>
        <BouncyCheckbox
          fillColor="#15803d"
          unfillColor="#FFF"
          disableBuiltInState
          iconStyle={{
            borderColor: "#15803d",
            borderRadius: 4,
            borderWidth: 1,
          }}
          innerIconStyle={{
            borderColor: "#15803d",
            borderRadius: 4,
          }}
          onPress={() => {
            let updatedItems = filterItems.map((item: Category) => {
              if (item.name === filterItems[index].name) {
                item.checked = !filterItems[index].checked;
              }
              return item;
            });

            setFilterItems(updatedItems);
          }}
          isChecked={item.checked}
        />
      </View>
    );
  };

  return (
    <View style={tw`p-8 bg-gray-200`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={tw`mb-24`}
        data={filterItems}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
        ListFooterComponent={
          <TouchableOpacity
            style={tw`bg-green-700 px-12 py-4 my-4 items-center rounded-md`}
            onPress={clearAllFilters}
          >
            <Text style={tw`text-white`}>Clear Filters</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={tw`h-16 mx-4 mt-4 items-center justify-center bg-green-700 rounded-md`}
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
