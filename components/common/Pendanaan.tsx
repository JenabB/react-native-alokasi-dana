import { View, Text, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PendanaanDetail } from "../../screens";
import { formatRp } from "../../utils";

interface PendanaanProps {
  name: string;
  danaAwal: number;
  danaAkhir: number;
  createdAt: any;
  danaList: Array<any>;
}

const Pendanaan: FC<PendanaanProps> = ({
  name,
  danaAwal,
  danaAkhir,
  createdAt,
  danaList,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("PendanaanDetail")}>
        <View className="mx-4 my-1">
          <View className="px-3 py-2">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="font-bold text-[16px]">{name}</Text>
              </View>
              <Text className="text-md font-bold">{formatRp(danaAkhir)}</Text>
            </View>
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-sm text-gray-600">0 Pendanaan</Text>
              <Text
                className={`text-xs font-bold ${
                  (danaAwal / danaAkhir) * 100 > 80
                    ? "text-red-400"
                    : "text-blue-400"
                } `}
              >
                {((danaAwal / danaAkhir) * 100).toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Pendanaan;
