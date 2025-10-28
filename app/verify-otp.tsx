import GradientButton from "@/components/UI/GradientButton";
import Icons from "@/constants/icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  TextInputKeyPressEvent,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: TextInputKeyPressEvent, index: number) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const otpValue = otp.join("");
    console.log("OTP Submitted:", otpValue);
    router.push("/(root)/(tabs)");
  };

  const handlePressNext = () => {
    router.push(`/FirstNameScreen`);
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

        <View className="flex-row gap-3 justify-start mt-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              maxLength={1}
              keyboardType="number-pad"
              value={otp[index]}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              className="font-nunito-medium border-b-2 border-black py-1 w-16"
            />
          ))}
        </View>

          <Text className="font-nunito-medium">
            Enter 6 digit code sent to 080123456789. didn’t get code? Resend
          </Text>
          </View>
          <View className="pb-12">
            <GradientButton text="Next" onPress={handlePressNext} />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;
