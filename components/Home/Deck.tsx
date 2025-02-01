import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Profile } from "./Roommates";
import ProfileCard from "./ProfileCard";

interface DeckProps {
  profiles: Profile[];
}

const { width } = Dimensions.get("window");

// Render a stack: show current card on top and a few behind with slight offset & scale.
const Deck: React.FC<DeckProps> = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSwipeUp = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onSwipeDown = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onSwipeLeft = () => {
    console.log("Blocked", profiles[currentIndex].name);
  };

  const onSwipeRight = () => {
    console.log("Liked", profiles[currentIndex].name);
  };

  const onTap = () => {
    console.log("Expand card for", profiles[currentIndex].name);
  };

  // We'll render current card plus up to two cards behind for the stacking effect.
  const renderCards = () => {
    const cardsToRender = profiles.slice(currentIndex, currentIndex + 3);
    return cardsToRender.map((profile, idx) => {
      // idx=0 is current card; later ones are behind.
      const offset = 25 * idx;
      const scale = 1 - 0.05 * idx;
      return (
        <View
          key={profile.id}
          style={[
            styles.cardWrapper,
            {
              top: offset,
              transform: [{ scale }],
              zIndex: profiles.length - idx,
            },
          ]}
        >
          <ProfileCard
            profile={profile}
            onSwipeUp={onSwipeUp}
            onSwipeDown={onSwipeDown}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            onTap={onTap}
          />
        </View>
      );
    });
  };

  return <View style={styles.deckContainer}>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardWrapper: {
    position: "absolute",
    width: "100%",
  },
});

export default Deck;
