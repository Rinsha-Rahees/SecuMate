import React from "react";
import { TextInput, View } from "react-native";

interface InputFieldProps {
  input?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  fieldType: string;
  fullWidth?: boolean;
  className?: string;
  accessibilityLabel?: string;
  autoFocus?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  input,
  placeholder,
  onChangeText,
  fieldType = "number",
  fullWidth = false,
  className,
  accessibilityLabel,
  autoFocus
}) => {
  const renderTextField = () => {
    switch (fieldType) {
      case "phone":
        return (
          <TextInput
            className={`font-nunito-medium border-b-2 border-black py-1 ${fullWidth ? "flex-1" : ""} ${className}`}
            keyboardType="phone-pad"
            value={input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            accessibilityLabel={accessibilityLabel}
            autoFocus={autoFocus}
          />
        );
        case "number":
        return (
          <TextInput
            className={`font-nunito-medium border-b-2 border-black py-1 ${fullWidth ? "flex-1" : ""} ${className}`}
            keyboardType="number-pad"
            value={input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            accessibilityLabel={accessibilityLabel}
            autoFocus={autoFocus}
          />
        );
      case "text":
        return (
          <TextInput
            className={`font-nunito-medium border-b-2 border-black py-1 ${fullWidth ? "w-full" : ""} ${className}`}
            keyboardType="default"
            value={input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            accessibilityLabel={accessibilityLabel}
            autoFocus={autoFocus}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-row items-center flex-1">{renderTextField()}</View>
  );
};

export default InputField;
