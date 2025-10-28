import Button from "@/components/UI/Button";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AuthScreen = () => {

  const handlePressSignUp = () => {
    router.push(`/sign-up`);
  };

  return (
    <View className="flex-1 bg-primary-100 p-6">
      <View className="flex-1 items-center justify-center mt-80">
        <Text className="text-black font-nunito-extrabold text-4xl">
          SecuMate
        </Text>
        <Text className="text-black font-nunito-bold text-xl text-center max-w-64 mt-6">
          No religion, nothing casual, find your partner.
        </Text>

        <View className="mt-[120px] mb-8 w-full gap-4">
          <Button
            variant="noOutline"
            title="CREATE ACCOUNT"
            className="text-xl font-nunito"
            onPress={handlePressSignUp}
          />
          <Button
            variant="outline"
            title="SIGN IN"
            className="text-xl font-nunito"
          />
        </View>

        <Text className="font-nunito-semibold">Trouble signing in?</Text>
      </View>

      <View className="items-center justify-center mb-4">
        <Text className="text-center max-w-96">
          <Text className="font-nunito">By continuing, you agree to our </Text>
          <Text className="font-nunito-bold">Terms of Service</Text>
          <Text className="font-nunito"> and </Text>
          <Text className="font-nunito-bold">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}

export default AuthScreen;
