import React, { useMemo, forwardRef, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  TouchableOpacity,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";

import tw from "twrnc";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["55%"], []);

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
        <View style={tw`flex-row justify-center items-center gap-8 mb-18`}>
          <TouchableOpacity>
            <Text>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Pick-Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tw`bg-green-500 px-4 m-4 py-4 rounded-md items-center`}
          onPress={() => dismiss()}
        >
          <Text style={tw`text-white font-bold`}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
