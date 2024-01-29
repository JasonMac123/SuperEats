import React, { useMemo, forwardRef, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  TouchableOpacity,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UserPosition from "../UserPosition";

import tw from "twrnc";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["70%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ borderRadius: 0, backgroundColor: "#F9F8F8" }}
      handleIndicatorStyle={{ display: "none" }}
    >
      <View>
        <View style={tw`flex-row justify-center items-center gap-8 mb-12`}>
          <TouchableOpacity
            style={tw`bg-green-700 items-center justify-center p-2 px-8 rounded-lg`}
          >
            <Text style={tw`text-white`}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`text-green-700`}>
            <Text>Pick-Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-lg font-semibold mx-8 mb-4`}>Your Location</Text>
        <UserPosition />
        <Text style={tw`text-lg font-semibold mx-8 mb-4`}>Arrival Time</Text>
        <TouchableOpacity>
          <View
            style={tw`flex-row gap-8 items-center py-4 px-8 mb-4 bg-white shadow-md`}
          >
            <Ionicons name="stopwatch" size={24} color="black" />
            <Text style={tw`flex-1`}>Now</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-green-700 text-white px-4 m-4 mt-32 py-4 rounded-md items-center`}
          onPress={() => dismiss()}
        >
          <Text style={tw`text-white font-bold`}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
