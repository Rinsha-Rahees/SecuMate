import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

const variants = {
  primary: {
    text: "text-primary-100",
    container: "bg-accent-100",
  },
  outline: {
    text: "text-black-100",
    container: "bg-transparent border border-black-100",
  },
  noOutline: {
    text: "text-black-100",
    container: "bg-accent-200",
  },
};

interface ButtonProps {
  variant?: "primary" | "outline" | "noOutline";
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  className?: string;
}
const Button = ({ variant = "primary", title, onPress, className }: ButtonProps) => {
  return (
    <TouchableOpacity className={`py-5 rounded-full ${variants[variant].container}`} onPress={onPress}>
      <Text className={`text-center font-nunito-bold ${variants[variant].text} ${className} `}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
