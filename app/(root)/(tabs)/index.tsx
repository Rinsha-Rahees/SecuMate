// import EventCard from "@/components/EventCard";
// import LocationBadge from "@/components/LocationBadge";
// import SearchBar from "@/components/SearchBar";
// import WeatherBadge from "@/components/WeatherBadge";
// import { EventList, Locations } from "@/constants/staticData";
import { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<string>();
  const handleLocationSelections = (item: string) => {
    setSelectedLocation(item);
  };

  const handleCardPress = (id: string) => {
    // router.push(`/events/${id}`);
  };
  return (
    <SafeAreaView className=" px-6 pt-4 bg-accent-100 h-full flex flex-col">
      <StatusBar className="  bg-black " />
      <View className=" flex flex-row items-center justify-between">
        <View>
          <Text className=" text-2xl font-nunito-semibold">Hi, Anaz 👋🏻</Text>
        </View>
      
      </View>
      <Text className=" text-2xl mt-5 font-nunito-semibold text-primary-100">Upcoming Events</Text>
      <View className="-mx-6">
        {/* <FlatList
          data={Locations}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleLocationSelections(item)}>
              <LocationBadge title={item} isSelected={selectedLocation === item} />
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 3, marginVertical: 10, paddingHorizontal: 20 }}
        /> */}
      </View>
      <View className=" mt-4 flex-1">
        {/* <FlatList
          data={EventList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
              <EventCard {...item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        /> */}
      </View>
    </SafeAreaView>
  );
}
 