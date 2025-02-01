import React, { FC } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Path } from "react-native-svg";

interface MaskedImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const MaskedImage: FC<MaskedImageProps> = ({ source, style }) => (
  <View style={styles.container}>
    <MaskedView
      maskElement={
        <View style={[styles.maskContainer]}>
          <Svg viewBox="0 0 238 240" fill="none">
            <Path
              d="M196.773 186.252C230.424 171.699 239.683 127.887 215.924 100.265C226.903 64.6871 198.834 29.0683 162.038 30.9672C141.06 1.26859 96.5119 1.26859 75.5334 30.9672C38.7379 29.0683 10.6691 64.6871 21.6475 100.265C-2.11129 127.887 7.14734 171.699 40.7983 186.252C46.2258 222.773 86.779 242.535 118.786 224.769C150.793 242.535 191.346 222.773 196.773 186.252Z"
              fill="#D9D9D9"
              stroke="white"
              stroke-width="15.6893"
            />
          </Svg>
        </View>
      }
    >
      <Image source={source} style={[styles.image]} resizeMode="cover" />
    </MaskedView>

    <View style={{ marginTop: -67, zIndex:-1 }}>
      <Svg viewBox="0 0 238 240" height={74} width={70} fill="#FFF">
        <Path
          d="M196.773 186.252C230.424 171.699 239.683 127.887 215.924 100.265C226.903 64.6871 198.834 29.0683 162.038 30.9672C141.06 1.26859 96.5119 1.26859 75.5334 30.9672C38.7379 29.0683 10.6691 64.6871 21.6475 100.265C-2.11129 127.887 7.14734 171.699 40.7983 186.252C46.2258 222.773 86.779 242.535 118.786 224.769C150.793 242.535 191.346 222.773 196.773 186.252Z"
          fill="#FFF"
          stroke={"#FFF"}
          strokeWidth={2}
        />
      </Svg>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  maskContainer: {
    backgroundColor: "transparent",
    zIndex:2
  },
  image: {
    width: 65,
    height: 60,
  },
});

export default MaskedImage;
