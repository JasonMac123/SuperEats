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
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleFeature;
