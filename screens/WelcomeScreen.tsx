import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/smile-children-holding-young-tree-planting-concept-save-world_34152-1293.jpg",
        }}
        className="w-full h-[45%]"
      />
      <View className="p-4">
        <Text className="text-xl font-bold">
          Selamat datang di Alokasi Dana
        </Text>
        <Text className="text-sm">
          Catat alokasi keuangan anda untuk finansial yang teratur
        </Text>
      </View>
      <>
        <View className="flex-1 text-center px-4 justify-center">
          <View className="my-2">
            <Button
              title="Masuk"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <Button
            color="black"
            title="Daftar"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </>
    </View>
  );
};

export default WelcomeScreen;
