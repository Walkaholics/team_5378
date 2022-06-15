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
  PageTitle2,
  StyledFormArea,
  StyledTextInput2,
  StyledButton,
  LeftIcon2,
  ButtonText,
  Colors,
  ExitView,
} from '../components/styles';
// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useFormik } from "formik";
// Colors
const { grey, black } = Colors;




const GettingStarted = () => {
    const navigation = useNavigation();


    // Function to insert into test table in Supabase
    async function doUpdate(age, gender) {
        console.log("test")
        const { data, error } = await supabase
        .from('test')
        .insert([
          { id: 999, Age: age, Gender: gender }
        ])
      if (error) {
        Alert.alert("Error Signing Up", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      } else {
        navigation.navigate("AccountPage");
      }

    }

    return (
      <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ExitView onPress={() => navigation.navigate("SignUp")}>
          <Octicons name={'arrow-left'} size={30} color={black} />
        </ExitView>
        <PageTitle2>Tell Us About Yourself</PageTitle2>

        <Formik
          initialValues={{
            age: '',
            gender: '',
            weight: '',
            height: '',
            bodyFatPercentage: '',
            sleepTime: '',
          }}
          //onSubmit={(values) => doUpdate(values.age, values.gender)}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <UserTextInput
                placeholder="Age"
                placeholderTextColor={grey}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                keyboardType="numeric"
              />
              <UserTextInput
                placeholder="Gender"
                placeholderTextColor={grey}
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
                value={values.gender}
              />
              <UserTextInput
                placeholder="Weight/kg"
                placeholderTextColor={grey}
                onChangeText={handleChange('weight}')}
                onBlur={handleBlur('weight}')}
                value={values.weight}
              />
              <UserTextInput
                placeholder="Height/cm"
                placeholderTextColor={grey}
                onChangeText={handleChange('height')}
                onBlur={handleBlur('height')}
                value={values.height}
              />
              <UserTextInput
                placeholder="BodyFatPercentage"
                placeholderTextColor={grey}
                onChangeText={handleChange('bodyFatPercentage')}
                onBlur={handleBlur('bodyFatPercentage')}
                value={values.bodyFatPercentage}
              />
              <UserTextInput
                placeholder="SleepTime/hr"
                placeholderTextColor={grey}
                onChangeText={handleChange('sleepTime}')}
                onBlur={handleBlur('sleepTime}')}
                value={values.sleepTime}
              />

              <StyledButton onPress={handleSubmit}>
                <ButtonText>Next</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
    )

}

const UserTextInput = ({ ...props }) => {
  return (
    <View>
      <LeftIcon2>
        <Ionicons
          name={'arrow-forward-circle-outline'}
          size={25}
          color={grey}
        />
      </LeftIcon2>
      <StyledTextInput2 {...props} />
    </View>
  );
};

  

export default GettingStarted;