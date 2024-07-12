import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
        <Section
          name="Comidas em alta"
          label="Ver todas"
          action={() => console.log("CLICOU NO VER MAIS")}
          size="text-2xl"
        />

        <TrendingFoods />
        <Section
          name="Famosos no DevFood"
          label="Ver todos"
          size="text-xl"
          action={() => console.log("CLICOU NO VER MAIS")}
        />
        <Restaurants />

        <Section
          name="Restaurantes"
          label="Ver todos"
          size="text-xl"
          action={() => console.log("CLICOU NO RESTAURANTES")}
        />
        <RestaurantVerticalList />
      </View>
    </ScrollView>
  );
}
