import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import tw from "twrnc";

import { Setting } from "../constants/types";

interface SettingRowProps {
  setting: Setting;
}

const SettingRow = ({ setting }: SettingRowProps) => {
  return (
    <TouchableOpacity>
      <View style={tw`flex-row px-4 py-2 bg-white items-center`}>
        <FontAwesome name={setting.fontAwesomeIconName} size={24} />
        <Text>{setting.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingRow;
