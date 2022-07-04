import { StyleSheet } from "react-native";
import { $palette } from "../../utils/variables";

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  labelContainer: {
    flexDirection: "row",
  },
  label: {
    width: "80%",
    color: $palette.black,
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 10,
  },
  optionalLabel: {
    width: "20%",
    color: $palette.black,
    fontSize: 12,
    marginBottom: 8,
    textAlign: "right",
    paddingRight: 4,
  },
  textBoxWrapper: {
    backgroundColor: $palette.gray1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: $palette.gray2,
  },
  textBoxWrapperError: {
    borderBottomWidth: 1,
    borderColor: $palette.gray1,
    backgroundColor: $palette.gray1,
    flexDirection: "row",
    alignItems: "center",
  },
  textBox: {
    height: 48,
    paddingHorizontal: 10,
    flex: 1,
    fontSize: 16,
    color: $palette.textBlack,
    backgroundColor: $palette.gray1,
  },
  password: {
    paddingRight: 16,
  },
  showPasswordWrapper: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  loaderWrapper: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  showPassword: {
    width: 22,
    tintColor: $palette.black1,
  },
  showPasswordActive: {
    color: $palette.primaryColor,
  },
  error: {
    color: $palette.red2,
    fontSize: 12,
    marginTop: 4,
    paddingLeft: 10,
  },
  disabled: {
    opacity: 0.4,
  },
});
