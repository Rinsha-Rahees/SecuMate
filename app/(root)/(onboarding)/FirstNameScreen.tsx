import { useOnboarding } from "@/app/(root)/(onboarding)/_layout";
import InputField from "@/components/UI/InputField";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const FirstNameScreen = () => {
  const [name, setName] = useState("");
  const { setNextDisabled } = useOnboarding();

  // Disable Next button if name is empty
  useEffect(() => {
    setNextDisabled(name.trim().length === 0);
  }, [name, setNextDisabled]);

  return (
    <View className="mt-6">
      <Text className="text-3xl max-w-90 mb-8 font-nunito-semibold">
        What’s your first name?
      </Text>

      <View className="mt-4 mb-12">
        <InputField
          fieldType="text"
          input={name}
          placeholder="80123456789"
          onChangeText={setName}
          className="mt-5 border-black"
          accessibilityLabel="First name"
          autoFocus
          fullWidth
        />
      </View>
      <Text className="font-nunito-medium">
        This is how it’ll appear on your profile.
      </Text>
      <Text className="mt-1 font-nunito-semibold">Can’t change it later</Text>
    </View>
  );
};

export default FirstNameScreen;
