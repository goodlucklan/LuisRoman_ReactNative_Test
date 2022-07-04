import { useForm } from "react-hook-form";
import { View, Text, Alert } from "react-native";

import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ScreenTemplate from "../../components/ScreenTemplate/ScreenTemplate";
import { RootState } from "../../redux/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { loggingIn } from "../../redux/reducers/auth";

import { styles } from "./Home.style";

export default function Home() {
  const { control, handleSubmit } = useForm();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("data", data);
    if (data.email === "leromanpe@gmail.com" && data.password === "72974695") {
      dispatch(loggingIn());
    } else {
      Alert.alert("Enter the credentials");
    }
  };

  const Welcome = () => (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome</Text>
    </View>
  );
  return (
    <ScreenTemplate scrollable={false}>
      {user ? (
        Welcome()
      ) : (
        <View style={styles.container}>
          <TextBox
            type="email"
            label="Enter your Email"
            placeholder="Enter your Email"
            name="email"
            returnKeyType="next"
            control={control}
          />
          <TextBox
            type="password"
            label="Enter your Password"
            placeholder="Enter your Password"
            name="password"
            returnKeyType="next"
            control={control}
          />
          <Button
            textStyle={styles.buttonStyle}
            onPress={handleSubmit(onSubmit)}
          >
            {"Accept"}
          </Button>
        </View>
      )}
    </ScreenTemplate>
  );
}
