import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert, Pressable} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { signIn, supabase } from '../supabaseClient';
import { Input } from "@rneui/themed";

import { StatusBar } from 'expo-status-bar';
// import formik
import { Formik } from 'formik';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledTextInput,
  StyledButton,
  StyledInputLabel,
  LeftIcon,
  RightIcon,
  ButtonText,
  Colors,
} from '../components/styles';
// import icons
import { Octicons } from '@expo/vector-icons';
import { useFormik } from "formik";
// Colors
const { grey, lightGrey } = Colors;

const SignIn = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false)


    async function doSignIn(email, password) {
      const { user, session, error } = await signIn(email, password);
      if (error) {
        
        Alert.alert("Error Signing Up", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      } else {
        navigation.navigate("MainPage");
      }

    }


    return (
      <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Login into your Account</PageTitle>

        <Formik
          //innerRef={ref}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => doSignIn(values.email, values.password)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <UserTextInput
                label="Email Address"
                icon="mail"
                placeholder="Enter your Email ..."
                placeholderTextColor={grey}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <UserTextInput
                label="Password"
                icon="lock"
                placeholder="Enter your Password ..."
                placeholderTextColor={grey}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />

              <StyledButton onPress={handleSubmit}>
                <ButtonText>
                  Log In
                </ButtonText>
              </StyledButton>

            </StyledFormArea>
          )}
          
        </Formik>

        <SubTitle>Don't have an account? 
          <Pressable onPress={() => navigation.navigate("SignUp")}> 
            <Text> Sign Up </Text>
          </Pressable>

        </SubTitle>
      </InnerContainer>
    </StyledContainer>
    )

}

const UserTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={20} color={grey} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  

export default SignIn;