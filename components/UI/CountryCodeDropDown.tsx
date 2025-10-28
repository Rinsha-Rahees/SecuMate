import Icons from "@/constants/icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CountryCodeDropDownProps {
  countryCode?: string;
  onPressCountryCode?: () => void;
}
const CountryCodeDropDown: React.FC<CountryCodeDropDownProps> = ({
  countryCode,

  onPressCountryCode,
}) => {
  return (
    <View className="flex-row items-center">
      {countryCode && (
        <View className="border-b-2 border-black py-[3px] mr-4">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={onPressCountryCode}
            activeOpacity={0.7}
          >
            <Text className="text-base font-nunito-semibold">{countryCode}</Text>
            <Icons.ArrowDropDown />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CountryCodeDropDown;
