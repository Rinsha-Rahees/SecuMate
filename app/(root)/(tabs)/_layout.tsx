import { Tabs } from "expo-router";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

type TabIconProps = {
  focused: boolean;
  Icon: React.FC<SvgProps>;
  title: string;
};
const TabIcon = ({ focused, Icon }: TabIconProps) => (
  <View className="flex flex-col justify-center h-full items-center">
    <Icon color={focused ? "white" : "#666876"} />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        },
        tabBarStyle: {
          backgroundColor: "#051A09",
          position: "absolute",
          borderTopWidth: 0,
          minHeight: 70,
          margin: 20,
          borderRadius: 50,
          paddingHorizontal: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
 