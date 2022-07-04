import { View, Text, TextInput } from "react-native";
import { KeyboardTypeOptions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { FieldError, useController } from "react-hook-form";
import { useFormContext, useFormState } from "react-hook-form";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import { styles } from "./TextBox.styles";
import { TextBoxProps as Props } from "./TextBox.types";

const TextBox = forwardRef<TextInput, Props>((props, ref) => {
  const { type, style: propStyle, labelStyle, name } = props;
  const { label, textBoxStyle, control } = props;
  const { keyBoardType: propKeyBoardType, placeholder } = props;
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  const keyBoardType = useRef<KeyboardTypeOptions>("default");

  const setKeyBoardType = propKeyBoardType
    ? propKeyBoardType
    : keyBoardType.current;

  useEffect(() => {
    switch (type) {
      case "email":
        keyBoardType.current = "email-address";
        break;
      case "number":
        keyBoardType.current = "numeric";
        break;
      default:
        keyBoardType.current = "default";
        break;
    }
  }, [type]);

  const labelComponent = label ? (
    <Text style={[styles.label, labelStyle]}>{label}</Text>
  ) : null;

  if (!name) {
    return null;
  }

  return (
    <View style={[styles.wrapper, propStyle]}>
      <View style={styles.labelContainer}>{labelComponent}</View>
      <View style={styles.textBoxWrapperError}>
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          ref={ref}
          autoCorrect={true}
          keyboardType={setKeyBoardType}
          secureTextEntry={type === "password" ? true : false}
          placeholder={placeholder}
          style={[styles.textBox, textBoxStyle]}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
});

export default TextBox;
