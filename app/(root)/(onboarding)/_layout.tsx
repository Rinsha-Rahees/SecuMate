import OnboardingStatusRail from "@/components/Onboarding/OnboardingStatusRail";
import GradientButton from "@/components/UI/GradientButton";
import onboardingSteps from "@/constants/onboardingSteps";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { createContext, useContext, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Context to allow child screens to control the Next button
type OnboardingContextType = {
  setNextDisabled: (disabled: boolean) => void;
  setCustomNextHandler: (handler: (() => void) | null) => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingLayout");
  }
  return context;
};

export default function OnboardingLayout() {
  const router = useRouter();
  const segments = useSegments();
  const [isNextDisabled, setNextDisabled] = useState(false);
  const [customNextHandler, setCustomNextHandler] = useState<
    (() => void) | null
  >(null);

  // Get current segment (last part of the path)
  const currentSegment = segments[segments.length - 1] || onboardingSteps[0];
  const currentIndex = Math.max(
    0,
    onboardingSteps.findIndex((s) => currentSegment.includes(s))
  );
  const next = onboardingSteps[currentIndex + 1];
  const prev = onboardingSteps[currentIndex - 1];

  const handleNext = () => {
    // If screen provides custom handler, use it
    if (customNextHandler) {
      customNextHandler();
      return;
    }

    // Otherwise, navigate to next step
    if (next) {
      router.push(`/(root)/(onboarding)/${next}`);
    } else {
      // Finished onboarding, go to main app
      router.replace("/(root)/(tabs)");
    }
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleClose = () => {
    // Navigate back to auth or home
    router.replace("/auth");
  };

  return (
    <OnboardingContext.Provider
      value={{
        setNextDisabled,
        setCustomNextHandler: (handler) => setCustomNextHandler(() => handler),
      }}
    >
      <SafeAreaView className="flex-1 bg-primary-100 p-6">
        <OnboardingStatusRail
          progressIndex={currentIndex}
          total={onboardingSteps.length}
          onClose={handleClose}
          onBack={prev ? handleBack : undefined}
        />

        <View className="flex-1 px-4">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View className="flex-1">
                <Slot />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>

          <View className="pb-2">
            <GradientButton
              text={next ? "Next" : "Finish"}
              onPress={handleNext}
              // disabled={isNextDisabled}
            />
          </View>
        </View>
      </SafeAreaView>
    </OnboardingContext.Provider>
  );
}
