import ROButton from "@/components/UI/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handlePressContinue = () => {
    router.push(`/verify-otp`);
  };

  const handlePressSignUp = () => {
    router.push(`/sign-up`);
  };
  return (
    <SafeAreaView className="flex-1 bg-primary-100">
      <View className="flex-1 px-6 justify-center">
        <View className="mb-8">
          <Text className="text-2xl font-nunito-semibold mb-2">Welcome back, 👋</Text>
          <Text className="text-base font-nunito">Please enter phone number you registered with.</Text>
        </View>

        <View className="flex-row gap-3 mb-6">
          <View className="bg-white px-4 py-3 rounded-full border border-stroke-300">
            <Text>+92</Text>
          </View>
          <View className="flex-1">
            {/* <ROTextInput placeholder="Enter phone number" keyboardType="phone-pad" /> */}
          </View>
        </View>

        <View className="mb-4">
          <ROButton title="Continue" onPress={handlePressContinue} />
        </View>

        <View className="flex-row items-center justify-center mb-4">
          <Text className="text-gray-500">or</Text>
        </View>

        <View className="mb-8">
          <ROButton title="Sign Up" variant="outline" onPress={handlePressSignUp} />
        </View>

        <Text className="text-center text-sm font-nunito">
          By Signing in, you agree to our
        </Text>
        <Text className="text-center text-sm text-primary-100 font-nunito-medium">
          Terms of Service
        </Text>
        <Text className="text-center text-sm font-nunito">
          and
        </Text>
        <Text className="text-center text-sm text-primary-100 font-nunito-medium">
          Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
}
 
export default SignIn;
