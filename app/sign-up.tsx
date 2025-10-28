import CountryCodeDropDown from "@/components/UI/CountryCodeDropDown";
import GradientButton from "@/components/UI/GradientButton";
import InputField from "@/components/UI/InputField";
// import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
// import Checkbox from "expo-checkbox";
import Icons from "@/constants/icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    emailId: "",
    phoneNumber: "",
    agreed: false,
  });

  const [phone, setPhone] = useState("");

  // const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
  //   if (selectedDate) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       dateOfBirth: selectedDate.toLocaleDateString(),
  //     }));
  //   }
  // };

  const handlePressNext = () => {
    router.push(`/verify-otp`);
  };

  return (
    <SafeAreaView className="bg-primary-100 p-6 h-full">
      <TouchableOpacity
        className="w-10 h-10 rounded-full items-center justify-center"
        onPress={() => router.back()}
      >
        <Icons.BackArrow />
      </TouchableOpacity>
      <View className="px-4 h-full">
        <View className="flex-1">
          <Text className="text-3xl max-w-90 my-8 font-nunito-semibold">
            Can we get your number?
          </Text>

          <View className="flex-row items-center">
            <CountryCodeDropDown
              countryCode="NG +234"
              onPressCountryCode={() => console.log("Select country")}
            />
            <InputField
              fieldType="number"
              input={phone}
              placeholder="80123456789"
              onChangeText={setPhone}
              fullWidth
            />
          </View>

          {/* <RODatepicker label="Date Of Birth" handleDateChange={handleDateChange} value={formData.dateOfBirth} /> */}

          {/* <Checkbox
            value={formData.agreed}
            onValueChange={(newValue) => setFormData((prev) => ({ ...prev, agreed: newValue }))}
            className="mr-2 mt-1"
            color={formData.agreed ? "#002815" : undefined}
          /> */}

          <Text className="font-nunito-medium mt-10">
            We’ll text you a code to verify you’re really you. Message and data
            rates may apply.
          </Text>
        </View>
        <View className="pb-12">
          <GradientButton text="Next" onPress={handlePressNext} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
