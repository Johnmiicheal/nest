import { View, Text, Image, ScrollView } from "react-native";
import { ApartmentItem } from "./ApartmentItem";

export function ApartmentScreen() {
  const apartments = [
    {
      image: "https://img.freepik.com/free-photo/full-shot-young-man-woman-home_23-2149358490.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
      title: "Cool Apartment",
      location: "Banana Island, Lagos, Nigeria",
      ammenities: ["gym", "game room", "pool", "5 bedroom"],
    },
    {
      image: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-60384.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
      title: "Banana Islanda",
      location: "Banana Island, Lagos, Nigeria",
      ammenities: ["gym", "game room", "pool", "5 bedroom"],
    },
    {
        image: "https://img.freepik.com/free-photo/interior-with-bid-dining-room-modern-private-house_181624-17504.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
        title: "Banana Islandb",
        location: "Banana Island, Lagos, Nigeria",
        ammenities: ["gym", "game room", "pool", "5 bedroom"],
      },
      {
        image: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-60384.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
        title: "Banana Islandc",
        location: "Banana Island, Lagos, Nigeria",
        ammenities: ["gym", "game room", "pool", "5 bedroom"],
      },
      {
        image: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-60384.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
        title: "Banana Islandd",
        location: "Banana Island, Lagos, Nigeria",
        ammenities: ["gym", "game room", "pool", "5 bedroom"],
      },
      {
        image: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-60384.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
        title: "Banana Islandr",
        location: "Banana Island, Lagos, Nigeria",
        ammenities: ["gym", "game room", "pool", "5 bedroom"],
      },
      {
        image: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-60384.jpg?ga=GA1.1.458045946.1732215664&semt=ais_hybrid",
        title: "Banana Islandf",
        location: "Banana Island, Lagos, Nigeria",
        ammenities: ["gym", "game room", "pool", "5 bedroom"],
      },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, flexGrow: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#f7f7f7",
          alignItems: "center",
          padding: 20,
          gap: 10
        }}
      >
        {apartments.map((item) => (
          <ApartmentItem
            image={item.image}
            key={item.title}
            title={item.title}
            location={item.location}
            ammenities={item.ammenities}
          />
        ))}
      </View>
    </ScrollView>
  );
}
