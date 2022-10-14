import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainCreateScreen,
  MainDanaScreen,
  MainHomeScreen,
  MainPlanScreen,
  MainReportScreen,
} from "./main";
import { Pendanaan } from "../components/common";

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#84cc16",
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: { color: "black", fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainHomeScreen}
        options={{
          title: "Alokasi Dana",
          tabBarLabel: "Beranda",
          headerStyle: {
            backgroundColor: "#84cc16",
          },
          tabBarIconStyle: { color: "white" },
          headerTitleStyle: { fontSize: 18 },
          headerTitleAlign: "center",
          //   headerShown: false,
        }}
        // options={{
        //   tabBarIcon: () => (
        //     <Text>
        //       {/* <FontAwesomeIcon icon="mug-saucer" /> */}
        //     </Text>
        //   ),
        // }}
      />
      <Tab.Screen name="Dana" component={MainDanaScreen} />
      <Tab.Screen name="Create" component={MainCreateScreen} />
      <Tab.Screen name="Report" component={MainReportScreen} />
      <Tab.Screen name="Plan" component={MainPlanScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
