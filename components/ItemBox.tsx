import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import tw from "twrnc";

const ItemBox = () => {
  return (
    <>
      <View>
        <TouchableOpacity
          style={tw`flex-row gap-8 items-center py-4 px-8 mb-4 bg-white shadow-md`}
        >
          <Ionicons name="arrow-down-outline" size={20} color={"gray"} />
          <Text style={tw`flex-1`}>Sort</Text>
          <Ionicons name="chevron-forward" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={tw`flex-row gap-8 items-center py-4 px-8 mb-4 bg-white shadow-md`}
        >
          <Ionicons name="pricetag-sharp" size={20} color={"gray"} />
          <Text style={tw`flex-1`}>Offers</Text>
          <Ionicons name="chevron-forward" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={tw`flex-row gap-8 items-center py-4 px-8 mb-4 bg-white shadow-md`}
        >
          <MaterialIcons name="no-food" size={20} color={"gray"} />
          <Text style={tw`flex-1`}>Dietary Restrictions</Text>
          <Ionicons name="chevron-forward" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={tw`font-semibold text-xl mb-4`}>Categories</Text>
    </>
  );
};

export default ItemBox;
