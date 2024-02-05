import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";

import { Setting } from "../../constants/types";

import IconCard from "../../components/Cards/IconCard";
import SettingRow from "../../components/SettingRow";

const settingsData: Array<Setting> = [
  { fontAwesomeIconName: "eye-slash", name: "Privacy" },
  { fontAwesomeIconName: "star", name: "Favourites" },
  { fontAwesomeIconName: "mobile-phone", name: "Communications" },
  { fontAwesomeIconName: "envelope", name: "Help" },
  { fontAwesomeIconName: "info-circle", name: "About" },
];

const Profile = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <FlatList
        data={settingsData}
        ListHeaderComponent={() => (
          <>
            <View style={tw`flex-row px-6 py-2 justify-between mt-4 bg-white`}>
              <Text style={tw`text-2xl`}>Name</Text>
              <TouchableOpacity>
                <FontAwesome name="user" size={40} color="black" />
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row justify-between mx-4 gap-2 mt-4 mb-4`}>
              <IconCard entypoIconName="shopping-basket" label="Past Orders" />
              <IconCard entypoIconName="wallet" label="Wallet" />
              <IconCard entypoIconName="price-tag" label="Offers" />
            </View>
          </>
        )}
        renderItem={({ item }) => <SettingRow setting={item} />}
        ListFooterComponent={() => (
          <Text style={tw`text-neutral-500 ml-2 mt-2`}>Ver 0.1.2.5</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
