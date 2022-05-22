import { React, useState, useRef } from "react";
import { StyleSheet, View, SafeAreaView, Alert, Pressable} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { signIn, signUp, supabase } from '../supabaseClient';
import { Input } from "@rneui/themed";
import { disableExpoCliLogging } from "expo/build/logs/Logs";

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


const SignUp = () => {
    const navigation = useNavigation();
    //const [password, setPassword] = useState('');
    //const [email, setEmail] = useState('');
    //const ref = useRef(null);

    //console.log(ref.current.values.password);

    {/*
    const formik = useFormik({
      initialValues: {
         email: '', 
         password: '' 
      },
      onSubmit:() => doLogin()
    })
  */}
    async function doLogin(email, password) {
      const { user, session, error } = await signUp(email, password);
      
      if (error) {
        
        Alert.alert("Error Signing Up", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      }
      else {
        navigation.navigate("MainPage");
        signIn(email, password);
      }
    }

    return (

      <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Create your Account</PageTitle>

        <Formik
          //innerRef={ref}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => doLogin(values.email, values.password)}
          //onSubmit={(values) => console.log(values)}
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
                  Sign Up
                </ButtonText>
              </StyledButton>

            </StyledFormArea>
          )}
          
        </Formik>
        
        <SubTitle>Already have an account? 
          <Pressable onPress={() => navigation.navigate("SignIn")}> 
            <Text> Sign In </Text>
          </Pressable>

        </SubTitle>
      </InnerContainer>
    </StyledContainer>
    )

{/*
          <Input placeholder="Email" 
            onChangeText={(text) => setEmail(text)}
          />

          <Input placeholder="Password" secureTextEntry={true} 
            onChangeText={(text) => setPassword(text)}
          />
          <Button color="warning" onPress={() => doLogin()}>Confirm SignUp</Button>
        </SafeAreaView>
    )
*/}

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

export default SignUp;