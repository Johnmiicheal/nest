import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Avatar from "../Avatar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Deck from "./Deck";

export interface Profile {
    id: string;
    age: number,
    name: string;
    details: string;
    profileImage: string;
    isNewAccount: boolean;
    placeOfWork: string;
  }
  
  const profiles: Profile[] = [
    {
      id: "1",
      age: 21,
      name: "Yetunde",
      details: "Detail info about Alice",
      profileImage:
        "https://img.freepik.com/free-photo/woman-playing-guitar-local-event_23-2149188079.jpg",
      isNewAccount: true,
      placeOfWork: "Youth Corper at NYSC Eti Osa 2",
    },
    {
      id: "2",
      age: 23,
      name: "Olabode",
      details: "Detail info about Bob",
      profileImage:
        "https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-42417.jpg",
      isNewAccount: false,
      placeOfWork: "Customer Service at MTN Nigeria",
    },
    {
      id: "3",
      age: 27,
      name: "Chuks",
      details: "Detail info about Charlie",
      profileImage:
        "https://img.freepik.com/free-photo/vertical-shot-attractive-african-american-man-posing-smiling_181624-15027.jpg",
      isNewAccount: true,
      placeOfWork: "Software Developer at Andela Nigeria",
    },
    {
      id: "4",
      age: 24,
      name: "Amaka",
      details: "Detail info about Amaka",
      profileImage:
        "https://img.freepik.com/free-photo/young-black-woman-with-afro-hairstyle-smiling-urban-city-mixed-girl-colorful-sweater_1157-42590.jpg",
      isNewAccount: false,
      placeOfWork: "Finance Analyst at GTBank",
    },
    {
      id: "5",
      age: 26,
      name: "Esther",
      details: "Detail info about Eve",
      profileImage:
        "https://img.freepik.com/free-photo/best-friends-posing-together-studio_23-2148440562.jpg",
      isNewAccount: false,
      placeOfWork: "Marketing Manager at Nigerian Breweries",
    },
    {
      id: "6",
      age: 24,
      name: "Frank",
      details: "Detail info about Frank",
      profileImage:
        "https://img.freepik.com/free-photo/medium-shot-man-wearing-glasses_23-2149009414.jpg",
      isNewAccount: true,
      placeOfWork: "Operations Manager at Dangote Group",
    },
    {
      id: "7",
      age: 22,
      name: "Grace",
      details: "Detail info about Grace",
      profileImage:
        "https://img.freepik.com/free-photo/portrait-young-woman-with-afro-dreadlocks_23-2149451561.jpg?uid=R15812444&ga=GA1.1.1571535792.1737915801&semt=ais_hybrid",
      isNewAccount: false,
      placeOfWork: "HR Executive at Zenith Bank",
    },
    {
      id: "8",
      age: 23,
      name: "Hannah",
      details: "Detail info about Hannah",
      profileImage:
        "https://img.freepik.com/free-photo/portrait-of-woman_23-2148430179.jpg",
      isNewAccount: true,
      placeOfWork: "Graphic Designer at Interswitch Nigeria",
    },
    {
      id: "9",
      age: 27,
      name: "Ivy",
      details: "Detail info about Ivy",
      profileImage:
        "https://img.freepik.com/free-photo/portrait-of-woman_23-2148430180.jpg",
      isNewAccount: false,
      placeOfWork: "Project Coordinator at Access Bank",
    },
  ];  

export default function RoommatesScreen() {
  const SCREEN_WIDTH = Dimensions.get("window").width;

  const AVATARS = [
    { id: "1", imageUrl: "https://i.pravatar.cc/150?img=33" },
    { id: "2", imageUrl: "https://i.pravatar.cc/150?img=2" },
    { id: "3", imageUrl: "https://i.pravatar.cc/150?img=43" },
    { id: "4", imageUrl: "https://i.pravatar.cc/150?img=4" },
    { id: "5", imageUrl: "https://i.pravatar.cc/150?img=5" },
    { id: "6", imageUrl: "https://i.pravatar.cc/150?img=16" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 18,
          paddingLeft: 10,
        }}
      >
        <View>
          <Avatar
            source={{
              uri: "https://img.freepik.com/free-photo/full-length-shot-positive-carefree-woman-sits-crossed-legs-smiles-gently-dressed-casually-enjoys-domestic-atmosphere-isolated-yellow-wall-empty-space-people-lifestyle_273609-37742.jpg",
            }}
          />
        </View>
        <View style={styles.avatarList}>
          {AVATARS.map((avatar) => (
            <View key={avatar.id} style={styles.avatarItem}>
              <Avatar source={{ uri: avatar.imageUrl }} />
            </View>
          ))}
        </View>
      </View>
<View style={{ flex: 1, overflow: 'hidden' }}>
      <GestureHandlerRootView style={styles.deckContainer}>
        <Deck profiles={profiles} />
      </GestureHandlerRootView>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4D7",
  },
  deckContainer: {
    flex: 1,
  },
  avatarList: {
    justifyContent: "flex-end",
    paddingRight: 30,
    flexDirection: "row",
    flex: 1,
  },
  avatarItem: {
    marginRight: -25,
  },
});
