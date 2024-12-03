import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ApartmentScreen } from "./Apartment";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "@react-native-community/blur";

const Tab = createMaterialTopTabNavigator();

function RoommatesScreen() {
  return (
    <View style={styles.container}>
      <Text>Roommates Screen</Text>
    </View>
  );
}

function CustomTabBar({
  state,
  descriptors,
  navigation,
  position,
}: {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#c2c2c250",
        borderRadius: 10,
        padding: 4,
        overflow: "hidden",
      }}
    >
      <BlurView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[styles.tabItem, isFocused && styles.activeTabItem]}
          >
            <Text
              style={[styles.tabText, isFocused && styles.activeTabText]}
              onPress={onPress}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Apartment" component={ApartmentScreen} />
      <Tab.Screen name="Roommates" component={RoommatesScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  activeTabItem: {
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#747474",
  },
  activeTabText: {
    color: "#000",
  },
  swipeContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
});
