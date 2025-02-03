import type React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { PropertyCard } from "./PropertyCard";
import {
  Zap,
  BusFront,
  Dumbbell,
  LandPlot,
  Search,
  WavesLadder,
} from "lucide-react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH * 0.6;

const DISCOVER_PROPERTIES = [
  {
    id: "1",
    title:
      "Two bedroom apartment in a nice and quiet estate, preferably on Lagos Island",
    priceRange: "₦2.5m - ₦3.5m",
    imageUrl:
      "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg",
  },
  {
    id: "2",
    title: "3 bedroom bungalow in Ikeja",
    priceRange: "₦2.5m - ₦3.5m",
    imageUrl:
      "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg",
  },
  {
    id: "3",
    title: "Luxury 4 bedroom duplex in Lekki",
    priceRange: "₦5m - ₦7m",
    imageUrl:
      "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg",
  },
  {
    id: "4",
    title: "Studio apartment in Yaba",
    priceRange: "₦800k - ₦1.2m",
    imageUrl:
      "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1823.jpg",
  },
];

const FEATURED_PROPERTIES = [
  {
    id: "1",
    title: "Modern Self Contain Room, Ikeja",
    location: "111 Obafemi Awolowo Way, 100282",
    price: 750000,
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130526669.jpg?k=b435588bc7bdbae7f205fe13a902df1a71d6b064c8f379b76d3c8926784e6878&o=&hp=1",
    amenities: [
      {
        icon: Dumbbell,
        label: "Gym nearby",
      },
      {
        icon: BusFront,
        label: "Bus stop",
      },
      {
        icon: Zap,
        label: "24/7 Power",
      },
    ],
  },
  {
    id: "2",
    title: "Luxury 3 Bedroom Apartment, Lekki",
    location: "Admiralty Way, Lekki Phase 1",
    price: 3500000,
    imageUrl:
      "https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg",
    amenities: [
      {
        icon: WavesLadder,
        label: "Swimming Pool",
      },
      {
        icon: LandPlot,
        label: "Tennis Court",
      },
      {
        icon: Zap,
        label: "24/7 Power",
      },
    ],
  },
  {
    id: "3",
    title: "Cozy Studio Apartment, Surulere",
    location: "Adelabu Street, Surulere",
    price: 950000,
    imageUrl:
      "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1823.jpg",
    amenities: [
      {
        icon: WavesLadder,
        label: "Swimming Pool",
      },
      {
        icon: LandPlot,
        label: "Tennis Court",
      },
      {
        icon: Zap,
        label: "24/7 Power",
      },
    ],
  },
  {
    id: "4",
    title: "2 Bedroom Flat, Victoria Island",
    location: "Adeola Odeku Street, VI",
    price: 4500000,
    imageUrl:
      "https://img.freepik.com/free-photo/modern-living-room-interior-with-large-tv-screen-displaying-home-automation-system_9975-33164.jpg",
    amenities: [
      {
        icon: WavesLadder,
        label: "Swimming Pool",
      },
      {
        icon: LandPlot,
        label: "Tennis Court",
      },
      {
        icon: Zap,
        label: "24/7 Power",
      },
    ],
  },
];

export const ApartmentScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="I am looking for a two bedroom apartment in lekki"
            placeholderTextColor="#666666"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Search stroke="black" width={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.discoverScroll}
          >
            {DISCOVER_PROPERTIES.map((property) => (
              <View key={property.id} style={styles.discoverCard}>
                <PropertyCard {...property} compact onPress={() => {}} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore more listings</Text>
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4D7",
  },
  header: {
    padding: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logoIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#FFD54F",
    borderRadius: 12,
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  activeToggle: {
    backgroundColor: "#FFD54F",
  },
  activeToggleText: {
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    margin: 16,
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchButton: {
    backgroundColor: "#FFD54F",
    padding: 12,
    borderRadius: 25,
    margin: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  discoverScroll: {
    paddingRight: 4, // Add padding to the end of scroll
  },
  discoverCard: {
    width: CARD_WIDTH,
    marginRight: 16,
  },
});

export default ApartmentScreen;
