import { StyleSheet } from "react-native";
import { $palette } from "../../utils/variables";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    justifyContent: "center",
  },
  buttonStyle: {
    color: $palette.white,
  },
  textStyle: {
    fontSize: 24,
    padding: 8,
    textAlign: "center",
  },
});
