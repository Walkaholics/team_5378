import { React, useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { userData, supabase } from '../supabaseClient';
import { Dropdown } from 'react-native-element-dropdown';

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

// Colors
const { grey, lightGrey, black } = Colors;

//dropdown data
var minAge = 18,
  minWeight = 30,
  minHeight = 130,
  minBodyFat = 5,
  minSleepTime = 1,
  maxAge = 100,
  maxWeight = 250,
  maxHeight = 200,
  maxBodyFat = 40,
  maxSleepTime = 15;
// age
const age = [];
for (var i = minAge; i <= maxAge; i++) {
  age.push({ label: i, value: i });
}
// gender
const gender = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
];
// weight
const weight = [];
for (var i = minWeight; i <= maxWeight; i++) {
  weight.push({ label: i, value: i });
}
// height
const height = [];
for (var i = minHeight; i <= maxHeight; i++) {
  height.push({ label: i, value: i });
}
// bodyFatPercentage
const bodyFat = [];
for (var i = minBodyFat; i <= maxBodyFat; i++) {
  bodyFat.push({ label: i, value: i });
}
// sleepTime
const sleepTime = [];
for (var i = minSleepTime; i <= maxSleepTime; i++) {
  sleepTime.push({ label: i, value: i });
}




const UserData = () => {

    
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);

    const navigation = useNavigation();
    /*
    const [auth, setAuth] = useState(true);

    useEffect(() => {
      setAuth(supabase.auth.session());

      supabase.auth.onAuthStateChange((_event, session) => {
        console.log(session);
        setAuth(session);
      })
    })
    */

    // Function to insert into profiles table in Supabase
    async function doUpdate(values) {
        //console.log(values.gender)
        const { data, error } = await supabase
        .from('profiles')
        .upsert(
          { id: supabase.auth.user().id, 
            Age: values.age,
            Gender: values.gender,
            Weight: values.weight,
            Height: values.height,
            BFP: values.bodyFatPercentage,
            Sleep: values.sleepTime
          }
          /*
          { id: supabase.auth.user().id,
            Age: values.age}
          */
        )
        
      
      if (error) {
        Alert.alert("Error Updating", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      } else {
        navigation.navigate("UserGoal");
      }
      
    }

    return (
      <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ExitView onPress={() => navigation.navigate("SignUp")}>
          <Octicons 
          name={'arrow-left'} 
          size={30} 
          color={black} />
        </ExitView>
        <PageTitle2>Tell Us About Yourself</PageTitle2>

        
        <StyledFormArea>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={age}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Age"
            value={value1}
            searchPlaceholder="Search..."
            onChange={(item) => {
              setValue1(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={gender}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Gender"
            searchPlaceholder="Search..."
            value={value2}
            onChange={(item) => {
              setValue2(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={weight}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Weight(kg)"
            searchPlaceholder="Search..."
            value={value3}
            onChange={(item) => {
              setValue3(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={height}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Height(cm)"
            searchPlaceholder="Search..."
            value={value4}
            onChange={(item) => {
              setValue4(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={bodyFat}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="BodyFatPercentage"
            searchPlaceholder="Search..."
            value={value5}
            onChange={(item) => {
              setValue5(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={sleepTime}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="SleepTime(hr)"
            searchPlaceholder="Search..."
            value={value6}
            onChange={(item) => {
              setValue6(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'arrow-forward-circle-outline'}
                size={25}
                color={grey}
              />
            )}
          />
          <StyledButton
            onPress={() =>
              {
                {/*
              value1 &&
              value2 &&
              value3 &&
              value4 &&
              value5 &&
              value6 &&
              */}
              let test = {
                age: value1, 
                gender: value2, 
                weight: value3, 
                height: value4, 
                bodyFatPercentage: value5, 
                sleepTime: value6};

              console.log(test.age);
              console.log(test);
              doUpdate(test)
              }
            }
          >
            <ButtonText>Next</ButtonText>
          </StyledButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
    )

}

const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    padding: 10,
    height: 45,
    backgroundColor: lightGrey,
    borderRadius: 8,
  },
  icon: {
    marginRight: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 18,
  },
});

  

export default UserData;