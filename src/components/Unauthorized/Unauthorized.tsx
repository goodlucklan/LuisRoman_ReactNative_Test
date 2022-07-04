import { View, Text } from "react-native";
import React from "react";
import { styles } from "./Unauthorized.styles";

const Unauthorized = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleText}>Unauthorized User</Text>
      <Text>Please Logging In</Text>
    </View>
  );
};

export default Unauthorized;
