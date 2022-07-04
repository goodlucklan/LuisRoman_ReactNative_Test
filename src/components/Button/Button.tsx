import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { styles } from "./Button.styles";
import { ButtonProps as Props } from "./Button.interface";
import { $palette } from "../../utils/variables";
const Button: React.FC<Props> = (props) => {
  const { viewStyle, textStyle, onPress, mode = "PRIMARY", ...rest } = props;
  const { disabled, isLoading = false } = props;

  const buttonContentNode = (
    <>
      <Text style={[styles.textButton, textStyle]}>{props.children}</Text>
    </>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
      disabled={disabled}
      style={[styles.button, viewStyle]}
    >
      {isLoading ? (
        <>
          <ActivityIndicator color={$palette.primaryColor} />
        </>
      ) : (
        <>{buttonContentNode}</>
      )}
    </TouchableOpacity>
  );
};

export default Button;
