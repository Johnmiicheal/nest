import HomeScreen from "@/components/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export default function IndexScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
