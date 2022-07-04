import { StyleSheet } from "react-native";
import { $palette } from "../../utils/variables";
export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: $palette.primary,
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  textButton: {
    textAlign: "center",
  },
  primaryButton: {
    backgroundColor: $palette.primary,
  },
  secondaryButton: {
    backgroundColor: $palette.white,
    borderWidth: 1,
    borderColor: $palette.primary,
  },
  primaryText: {
    color: $palette.white,
  },
  secondaryText: {
    color: $palette.primary,
  },
});
