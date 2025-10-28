import Icons from "@/constants/icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

type Props = {
  progressIndex?: number;
  total?: number;
  onClose?: () => void;
  onBack?: () => void;
};

const OnboardingStatusRail = ({
  progressIndex = 0,
  total = 1,
  onClose,
  onBack,
}: Props) => {
  const progressWidth = Math.max(
    0,
    Math.min(1, total ? (progressIndex + 1) / total : 0)
  );
  return (
    <View className="bg-white border-[#E8E6F6]">
      {/* small top rail */}
      <View className="h-1 bg-transparent">
        <View
          className="absolute h-1 rounded"
          style={{
            width: `${progressWidth * 30}%`,
            backgroundColor: "#6B46C1",
          }}
        />
      </View>

      {/* header row with back/close */}
      <View className="pt-6 flex-row items-center">
        {onBack ? (
          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            onPress={onBack}
          >
            <Icons.BackArrow />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            onPress={onClose}
          >
            <Icons.Close />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnboardingStatusRail;
