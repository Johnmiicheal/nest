import type React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ApartmentScreen } from "./Apartment";
import RoommatesScreen from "./Roommates";

const Tab = createMaterialTopTabNavigator();

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
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: 'transparent'
      }}
    >
      <Image
        source={require("../../assets/icons/nest-logo.png")}
        style={{ width: 100, height: 30 }}
      />

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#FFF",
          borderRadius: 30,
          padding: 4,
          overflow: "hidden",
        }}
      >
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
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Roommates" component={RoommatesScreen} />
      <Tab.Screen name="Apartment" component={ApartmentScreen} />
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 30,
  },
  activeTabItem: {
    backgroundColor: "#FFC941",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#A2A2A2",
  },
  activeTabText: {
    color: "#FFF",
  },
  swipeContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
});
