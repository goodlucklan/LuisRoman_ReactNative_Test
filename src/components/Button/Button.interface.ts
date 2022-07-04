import { ReactNode } from "react";
import { TouchableOpacityProps as RNButtonProps } from "react-native";
import { ColorValue } from "react-native";
import { ViewStyle } from "react-native";
import { StyleProp, TextStyle } from "react-native";

export interface ButtonProps extends Omit<RNButtonProps, "title"> {
  mode?: ButtonModes;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  secondText?: string;
  secondTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  loaderColor?: ColorValue;
  loadingText?: string;
}

// Styled Component Props
export interface ButtonStyledProps {
  buttonMode: ButtonModes;
}

export type ButtonModes = "PRIMARY" | "SECONDARY";
