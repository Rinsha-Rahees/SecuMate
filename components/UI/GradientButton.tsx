import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const COLORS = {
  accent: {
    50: '#d7a2d6',
    100: '#C13DAC',
    200: '#9a84b4',
    300: '#5C488E',
  },
};

type Props = {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
};

const GradientButton = ({ text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} disabled={disabled} className="w-full">
      <LinearGradient
        colors={disabled ? [COLORS.accent[50], COLORS.accent[200]] : [COLORS.accent[100], COLORS.accent[300]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 9999, paddingVertical: 20 }}
      >
        <Text className="text-center text-white text-base">{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;