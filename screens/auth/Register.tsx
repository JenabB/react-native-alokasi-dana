import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "./AuthActions";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { selectLoginRoot, selectRequestStatus } from "./AuthSelector";

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const login = useAppSelector(selectLoginRoot);
  const isLoading = useAppSelector(selectRequestStatus);

  useEffect(() => {
    if (login.status === 201) {
      navigation.navigate("Login");
    }
  }, [login.status]);

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <KeyboardAvoidingView className="flex-1">
      <Image
        source={{
          uri: "https://media.istockphoto.com/photos/economy-investment-and-saving-concept-picture-id505872010?k=20&m=505872010&s=612x612&w=0&h=6zMrtjggub5apdy9aOHhe4jJCQNmh7oDjAbd8KPeUTM=",
        }}
        className="w-full h-[50%] object-cover"
      />
      <View className="justify-center p-4">
        <View className="mb-4">
          <Text className="text-xl font-bold">
            Selamat datang,
            <Text className="text-lg font-normal mb-4">
              {" "}
              Buat akun anda terlebih dahulu
            </Text>
          </Text>
        </View>
        <>
          <Formik
            initialValues={{ fullName: "", email: "", password: "" }}
            onSubmit={(values: any) => dispatch(loginUser(values))}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Nama Lengkap"
                  className="bg-white my-2 p-2 rounded-lg shadow-lg"
                  onChangeText={handleChange("fullName")}
                  value={values.fullName}
                />
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
                    Sudah punya akun?{" "}
                    <Text
                      className="text-blue-600"
                      onPress={() => navigation.navigate("Login")}
                    >
                      Masuk
                    </Text>
                  </Text>
                </View>
                <Button
                  className="bg-blue-600"
                  onPress={handleSubmit}
                  disabled={Boolean(
                    !values.fullName || !values.email || !values.password
                  )}
                  title="Daftar"
                />
              </View>
            )}
          </Formik>
        </>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
