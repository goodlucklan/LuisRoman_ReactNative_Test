import { View, Text, Linking } from "react-native";
import React, { useState } from "react";
import ScreenTemplate from "../../components/ScreenTemplate/ScreenTemplate";
import Unauthorized from "../../components/Unauthorized/Unauthorized";

import { RootState } from "../../redux/store/rootReducer";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";

import { styles } from "./Profile.styles";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const ProfileComponent = () => (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Profile</Text>
      <Button
        onPress={() => {
          Linking.openURL("https://github.com/goodlucklan");
        }}
        textStyle={{
          color: "white",
        }}
      >
        {"See my Github"}
      </Button>
    </View>
  );
  return (
    <ScreenTemplate scrollable={false}>
      {!user ? <Unauthorized /> : ProfileComponent()}
    </ScreenTemplate>
  );
};

export default Profile;
