import { View, Text } from "react-native";
import React from "react";

import { Setting } from "../constants/types";

interface SettingRowProps {
  setting: Setting;
}

const SettingRow = ({ setting }: SettingRowProps) => {
  return (
    <View>
      <Text>SettingRow</Text>
    </View>
  );
};

export default SettingRow;
