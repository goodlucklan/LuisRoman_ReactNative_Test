import { TextStyle, ViewStyle } from "react-native";
import { ColorValue, KeyboardTypeOptions } from "react-native";
import { ReturnKeyType, StyleProp } from "react-native";
import { UseControllerProps } from "react-hook-form";

export interface TextBoxProps extends UseControllerProps {
  type: TextBoxType;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
  label?: string;
  icon?: JSX.Element;
  keyBoardType?: KeyboardTypeOptions;
  placeholder?: string;
  textBoxStyle?: TextStyle;
  blurOnSubmit?: boolean;
  returnKeyType: ReturnKeyType;
  onSubmitEditing?: () => void;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  placeholderTextColor?: ColorValue;
  optionalLabel?: boolean;
  onFocus?: () => void;
  testID?: string;
  showLoader?: boolean;
  formatter?: (oldValue: string, newValue: string) => string;
}
export type TextBoxType = "password" | "email" | "number" | "text";
