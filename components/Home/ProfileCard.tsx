import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ToastAndroid,
  Platform,
} from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { Profile } from "./Roommates";
import { BriefcaseBusiness } from "lucide-react-native";

const SWIPE_THRESHOLD = 100;

interface ProfileCardProps {
  profile: Profile;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onTap: () => void;
}

type ContextType = {
  startX: number;
  startY: number;
};

// Simple cross-platform toast helper.
const showToast = (message: string) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    console.log("Toast:", message);
  }
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  onTap,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // 0 = none, 1 = up, 2 = down, 3 = left, 4 = right
  const toastDirection = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
      toastDirection.value = 0; // reset toast state on start
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;

      // Decide which axis is dominant
      if (Math.abs(translateY.value) > Math.abs(translateX.value)) {
        // Vertical swipe
        if (translateY.value < -70 && toastDirection.value !== 1) {
          runOnJS(showToast)("Next Profile");
          toastDirection.value = 1;
        } else if (translateY.value > 70 && toastDirection.value !== 2) {
          runOnJS(showToast)("Previous Profile");
          toastDirection.value = 2;
        }
      } else {
        // Horizontal swipe
        if (translateX.value > 70 && toastDirection.value !== 4) {
          runOnJS(showToast)("Like user");
          toastDirection.value = 4;
        } else if (translateX.value < -70 && toastDirection.value !== 3) {
          runOnJS(showToast)("Block user");
          toastDirection.value = 3;
        }
      }
    },
    onEnd: () => {
      // Determine swipe action if threshold reached
      if (translateY.value < -SWIPE_THRESHOLD) {
        runOnJS(onSwipeUp)();
      } else if (translateY.value > SWIPE_THRESHOLD) {
        runOnJS(onSwipeDown)();
      } else if (translateX.value > SWIPE_THRESHOLD) {
        runOnJS(onSwipeRight)();
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        runOnJS(onSwipeLeft)();
      }
      // Reset gesture values and toast direction.
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      toastDirection.value = 0;
    },
  });

  // Animated style with fade out effect based on swipe distance.
  const animatedStyle = useAnimatedStyle(() => {
    const distance = Math.max(
      Math.abs(translateX.value),
      Math.abs(translateY.value)
    );
    const opacity = interpolate(
      distance,
      [0, SWIPE_THRESHOLD],
      [1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      opacity,
    };
  });

  // Handle tap gesture (expand)
  const onSingleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === 4) {
      onTap();
    }
  };

  return (
    <TapGestureHandler onHandlerStateChange={onSingleTap}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={styles.cardContainer}>
            <Image
              source={{
                uri: `${profile.profileImage}`,
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardOverlay}>
              <View style={styles.cardContent}>
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>New here</Text>
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameText}>{profile.name}, {profile.age}</Text>
                  {/* <Text style={styles.emoji}>👑</Text> */}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 7,
                  }}
                >
                  <BriefcaseBusiness size={12} style={[styles.tapText]} />
                  <Text style={styles.tapText}>{profile.placeOfWork}</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  cardContainer: {
    marginHorizontal: 16,
    height: 600,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  cardContent: {
    padding: 16,
  },
  newBadge: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  newBadgeText: {
    fontSize: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  nameText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8,
  },
  emoji: {
    fontSize: 20,
  },
  tapText: {
    color: "white",
    fontSize: 12,
    opacity: 0.9,
  },
});

export default ProfileCard;
