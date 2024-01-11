import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import usePosition from "../../hooks/usePosition";
import * as Location from "expo-location";

const search = () => {
  const { latitude, longitude, setPosition } = usePosition();
  const [permissions, setPermissions] = useState<boolean>(false);

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      setPermissions(true);
      let currentPosition = await Location.getCurrentPositionAsync({});
      setPosition(
        currentPosition.coords.latitude,
        currentPosition.coords.longitude
      );
    };
  });

  const geocode = async (address: string) => {
    const geocodedLocation = await Location.geocodeAsync(address);
    setPosition(geocodedLocation[0].latitude, geocodedLocation[0].longitude);
  };

  return (
    <View>
      <Text>search-location</Text>
    </View>
  );
};

export default search;
