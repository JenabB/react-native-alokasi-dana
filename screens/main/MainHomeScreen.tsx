import { View, Text } from "react-native";
import React from "react";
import { TotalDanaHeader, SejarahPendanaan } from "../../components/main/home";

const MainHomeScreen = () => {
  return (
    <View className="pb-96">
      <TotalDanaHeader />
      <View className="bg-white">
        <View className="pl-7">
          <Text className="text-[18px] font-bold">Daftar Pendanaan</Text>
        </View>
        <SejarahPendanaan />
      </View>
    </View>
  );
};

export default MainHomeScreen;
