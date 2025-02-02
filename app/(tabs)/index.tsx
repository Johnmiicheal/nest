import HomeScreen from "@/components/Home/Home";
import { SafeAreaView } from "react-native";

export default function IndexScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF4D7' }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
