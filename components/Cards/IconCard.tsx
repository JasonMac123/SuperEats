import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

import tw from "twrnc";

interface IconCardProps {
  entypoIconName: keyof typeof Entypo.glyphMap;
  label: string;
}

const IconCard = ({ entypoIconName, label }: IconCardProps) => {
  return (
    <TouchableOpacity>
      <View
        style={tw`bg-white items-center justify-center rounded-xl w-28 h-30 py-4`}
      >
        <Entypo name={entypoIconName} size={35} />
        <Text style={tw`mt-2 mx-4`}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconCard;
