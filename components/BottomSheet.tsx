import React, { useMemo } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { View, Text } from "react-native";

const BottomSheet = () => {
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheetModal snapPoints={snapPoints}>
      <View>
        <Text>BottomSheet</Text>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheet;
