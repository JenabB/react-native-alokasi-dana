import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { loginUser, registerUser } from "./AuthActions";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { selectLoginRoot, selectRequestStatus } from "./AuthSelector";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const login = useAppSelector(selectLoginRoot);
  const isLoading = useAppSelector(selectRequestStatus);

  useEffect(() => {
    if (login.status === 200) {
      navigation.navigate("Home");
    }
  }, [login.status]);

  const alertButton = () =>
    Alert.alert(login.message, "Please correct again", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <KeyboardAvoidingView className="flex-1">
      {login.status === 401 || login.status === 404 ? alertButton : ""}
      <Image
        source={{
          uri: "https://www.thespruce.com/thmb/Ggzgf7W1zVZFEjbJ8EVl1QdsWmI=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1263431303-2f2ad79096694ef0adf7da7744d47f05.jpg",
        }}
        className="w-full h-[50%] object-cover"
      />
      <View className="justify-center p-4">
        <View className="mb-4">
          <Text className="text-xl font-bold">
            Manajemen uang yang baik,
            <Text className="text-lg font-normal mb-4">
              {" "}
              Dapat menghilangkan kebiasaan buruk
            </Text>
          </Text>
        </View>
        <>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values: any) => dispatch(loginUser(values))}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Alamat Email"
                  className="bg-white my-2 p-2 rounded-lg shadow-lg"
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  className="bg-white my-2 mb-4 p-2 rounded-lg shadow-lg"
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                <View className="mb-4">
                  <Text>
                    Belum punya akun?{" "}
                    <Text
                      className="text-blue-600"
                      onPress={() => navigation.navigate("Register")}
                    >
                      Daftar
                    </Text>
                  </Text>
                </View>
                <Button
                  className="bg-blue-600"
                  onPress={handleSubmit}
                  disabled={Boolean(!values.email || !values.password)}
                  title="Masuk"
                />
              </View>
            )}
          </Formik>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
