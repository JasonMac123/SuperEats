import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";

import tw from "twrnc";

const FilterModal = () => {
  return (
    <View style={tw`p-8 bg-white`}>
      <View style={styles.footer}>
        <TouchableOpacity
          style={tw`h-16 mx-4 items-center justify-center bg-green-700 rounded-md`}
          onPress={() => {}}
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
