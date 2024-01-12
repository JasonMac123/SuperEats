import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

import usePosition from "../../hooks/usePosition";
import { Restaurant } from "../../constants/types";

interface RestaurantProps {
  data: Restaurant;
}

import tw from "twrnc";
import { getDistanceCoordinates } from "../../functions/getDistance";

const RestaurantCard = ({ data }: RestaurantProps) => {
  const { latitude, longitude } = usePosition();

  return (
    <Link href={"/"} asChild>
      <TouchableOpacity>
        <View
          key={data.name}
          style={tw`mx-1 h-auto w-auto p-4 shadow-md bg-white`}
        >
          <Image
            source={{ uri: data.img }}
            style={{ width: 250, height: 150 }}
          />
          <View>
            <Text style={tw`font-semibold text-lg shadow-md`}>{data.name}</Text>
            <Text style={tw`font-semibold shadow-md`}>
              {data.rating}
              <Entypo name="star" size={24} color="yellow" /> (
              {data.numberOfRatings})
            </Text>
            <Text>
              {latitude && longitude
                ? `${getDistanceCoordinates(
                    latitude,
                    longitude,
                    data.lat,
                    data.long
                  )}`
                : `${data.address}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default RestaurantCard;
