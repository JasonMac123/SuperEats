import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import tw from "twrnc";

const FilterModal = () => {
  return (
    <View style={tw`p-8 bg-white relative h-full`}>
      <View style={tw`absolute bottom-8 w-80 h-16 mx-8`}>
        <TouchableOpacity
          style={tw`flex-1 items-center justify-center bg-green-700 rounded-md`}
          onPress={() => {}}
        >
          <Text style={tw`text-white text-xl font-bold`}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterModal;
