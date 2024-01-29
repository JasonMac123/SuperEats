import { View, Text, Switch } from "react-native";
import React, { useState } from "react";

import tw from "twrnc";

interface ToggleFeatureProps {
  title: string;
  description: string;
}

const ToggleFeature = ({ title, description }: ToggleFeatureProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={tw`flex-row bg-white px-4 py-2 items-center border border-gray-400`}
    >
      <View style={tw`flex-1`}>
        <Text style={tw`text-xl`}>{title}</Text>
        <Text style={tw`text-neutral-400`}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#bbf7d0" }}
        thumbColor={isEnabled ? "#16a34a" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleFeature;
