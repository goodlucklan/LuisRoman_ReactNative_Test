import { View } from "react-native";
import React from "react";
import Unauthorized from "../../components/Unauthorized/Unauthorized";
import ScreenTemplate from "../../components/ScreenTemplate/ScreenTemplate";

import { RootState } from "../../redux/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { loggingOut } from "../../redux/reducers/auth";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

import { styles } from "./Settings.styles";

const Settings = () => {
  const { handleSubmit } = useForm();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(loggingOut());
  };

  return (
    <ScreenTemplate scrollable={false}>
      {!user ? (
        <Unauthorized />
      ) : (
        <View style={styles.container}>
          <Button textStyle={styles.textStyle} onPress={handleSubmit(onSubmit)}>
            {"logging Out"}
          </Button>
        </View>
      )}
    </ScreenTemplate>
  );
};

export default Settings;
