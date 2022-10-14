import { View, Text } from "react-native";
import React from "react";
import { formatRp } from "../../../utils";

const TotalDanaHeader = () => {
  return (
    <View className="bg-white">
      <View className="rounded-lg bg-lime-500 m-4 p-2">
        <Text className="text-gray-600 text-sm">Total Dana Dialokasikan</Text>
        <Text className="text-3xl text-gray-700 font-bold mt-2">
          {formatRp(3000000)}
        </Text>
        <View className="flex-row mt-2">
          <View className="bg-black rounded-l items-center flex-1 p-2">
            <Text className="text-xs text-white">Total Dana Awal</Text>
            <Text className="text-white">{formatRp(30000)}</Text>
          </View>
          <View className="bg-black rounded-r items-center flex-1 p-2">
            <Text className="text-white text-xs">Total Dana Akhir</Text>
            <Text className="text-white">{formatRp(30000)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TotalDanaHeader;
