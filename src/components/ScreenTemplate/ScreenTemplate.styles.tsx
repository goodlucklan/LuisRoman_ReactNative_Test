import { StyleSheet } from "react-native";
import { $palette } from "../../utils/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $palette.white,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: $palette.white,
  },
});
