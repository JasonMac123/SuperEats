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
    <Link
      href={{
        pathname: "/restaurant/[restaurantId]",
        params: { restaurantId: data.id },
      }}
      asChild
    >
      <TouchableOpacity>
        <View
          key={data.name}
          style={tw`mx-1 h-auto w-auto p-2 shadow-md bg-white`}
        >
          <Image
            source={{ uri: data.img }}
            style={{ width: 250, height: 150 }}
          />
          <View style={tw`flex-row justify-between`}>
            <View>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`font-semibold text-lg shadow-md`}>
                  {data.name}
                </Text>
                <Text style={tw`font-semibold`}>
                  {data.rating}
                  <Entypo name="star" size={16} color="green" /> (
                  {data.numberOfRatings})
                </Text>
              </View>
              <Text>
                ${data.fee} fee, {data.minDeliveryTime} - {data.maxDeliveryTime}{" "}
                min delivery time.
              </Text>
              <Text>
                {latitude && longitude
                  ? `${getDistanceCoordinates(
                      latitude,
                      longitude,
                      data.lat,
                      data.long
                    )} Km away`
                  : `${data.address}`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default RestaurantCard;
