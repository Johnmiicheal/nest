import React, { useState } from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { Text, View } from "@/components/Themed";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { TabButton } from "@/components/ui/TabButton";
import Swiper from "react-native-swiper";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const TABS = ["Roommate", "Apartment"];

export default function TabOneScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const translateX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = -event.translationX;
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) < 500) {
        translateX.value = withTiming(0);
        return;
      }

      if (event.velocityX < 0) {
        // Swipe left
        if (activeTab === 0) {
          translateX.value = withTiming(SCREEN_WIDTH, {}, () => {
            runOnJS(setActiveTab)(0);
            // runOnJS(resetPosition)();
          });
        } else {
          translateX.value = withTiming(0);
        }
      } else {
        // Swipe right
        if (activeTab === 1) {
          translateX.value = withTiming(-SCREEN_WIDTH, {}, () => {
            runOnJS(setActiveTab)(1);
            // runOnJS(resetPosition)();
          });
        } else {
          translateX.value = withTiming(0);
        }
      }
    });

  const resetPosition = () => {
    translateX.value = 0;
  };

  class Home extends React.Component {
    viewStyle() {
      return {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
      };
    }
  }

  return (
    <Swiper loop={false} showsPagination={false} index={0}>
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "green",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            backgroundColor: "green",
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.tabBar}>
            {TABS.map((tab, index) => (
              <TabButton
                key={tab}
                title={tab}
                onPress={() => {
                  setActiveTab(index);
                  translateX.value = withTiming(0);
                }}
                isActive={activeTab === index}
              />
            ))}
          </View>

          <Text style={{ fontSize: 48, color: "white" }}>Home</Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: 48, color: "white" }}>Left</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        <Text style={{ fontSize: 48, color: "white" }}>Right</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  tabBarContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    borderRadius: 9999,
    padding: 4,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    width: SCREEN_WIDTH * 2,
  },
  content: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
