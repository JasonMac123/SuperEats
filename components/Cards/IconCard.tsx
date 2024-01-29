import { View, Text } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

interface IconCardProps {
  entypoIconName: keyof typeof Entypo.glyphMap;
  label: string;
}

const IconCard = ({ entypoIconName, label }: IconCardProps) => {
  return (
    <View>
      <Entypo name={entypoIconName} />
      <Text>{label}</Text>
    </View>
  );
};

export default IconCard;
