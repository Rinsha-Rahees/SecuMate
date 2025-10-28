import { useOnboarding } from "@/app/(root)/(onboarding)/_layout";
import { useEffect, useRef, useState } from "react";
import { Text, TextInput, TextInputKeyPressEvent, View } from "react-native";

const DOBScreen = () => {
  const [dob, setDob] = useState("");
  const { setNextDisabled } = useOnboarding();
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Disable Next button if DOB is empty or invalid
  useEffect(() => {
    // Simple validation: check if date is in format MM/DD/YYYY and not empty
    const isValid = dob.trim().length > 0 && /^\d{2}\/\d{2}\/\d{4}$/.test(dob);
    setNextDisabled(!isValid);
  }, [dob, setNextDisabled]);

  const handleDOBChange = (text: string) => {
    // Auto-format as MM/DD/YYYY
    let formatted = text.replace(/\D/g, "");
    if (formatted.length >= 2) {
      formatted = formatted.slice(0, 2) + "/" + formatted.slice(2);
    }
    if (formatted.length >= 5) {
      formatted = formatted.slice(0, 5) + "/" + formatted.slice(5, 9);
    }
    setDob(formatted);
  };

  const handleKeyPress = (event: TextInputKeyPressEvent, index: number) => {
    if (event.nativeEvent.key === "Backspace" && !dob[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="mt-6">
      <Text className="text-3xl max-w-90 mb-8  font-nunito-semibold">
        When's your birthday?
      </Text>

      <View className="flex-row gap-4 justify-start mt-4 mb-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          const placeholders = ["D", "D", "", "M", "M", "", "Y", "Y", "Y", "Y"];

          if (index === 2 || index === 5) {
            return <View className="rotate-[10deg] border" key={index} />;
          } else {
            return (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                placeholder={placeholders[index]}
                placeholderTextColor="#9CA3AF"
                maxLength={1}
                keyboardType="number-pad"
                value={dob[index]}
                onChangeText={(value) => handleDOBChange(value)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                className="font-nunito-medium border-b-2 border-black py-1 w-6"
              />
            );
          }
        })}
      </View>

      <Text className="font-nunito-medium">
        Your Profile shows your age, not your date of birth.
      </Text>
    </View>
  );
};

export default DOBScreen;
