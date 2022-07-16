import { useEffect, useState, useRef, createRef } from "react";
import { StyleSheet, Alert, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { userData, supabase } from "../supabaseClient";
import { Dropdown } from "react-native-element-dropdown";

import { StatusBar } from "expo-status-bar";
// import formik
import { Formik } from "formik";
import {
  StyledContainer,
  InnerContainer,
  PageTitle2,
  StyledFormArea,
  StyledTextInput2,
  StyledButton,
  DisabledButton,
  LeftIcon2,
  ButtonText,
  Colors,
  ExitIcon,
  ProfilePicture,
} from "../components/styles";
// import icons
import { Octicons, Ionicons } from "@expo/vector-icons";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as React from "react";

// Colors
const { grey, lightGrey, black } = Colors;

//dropdown data
var minAge = 18,
  minWeight = 30,
  minHeight = 130,
  minBodyFat = 15,
  minSleepTime = 1,
  maxAge = 100,
  maxWeight = 250,
  maxHeight = 200,
  maxBodyFat = 36,
  maxSleepTime = 15;
// age
const age = [];
for (var i = minAge; i <= maxAge; i++) {
  age.push({ label: i.toString(), value: i });
}
// gender
const gender = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
];
// weight
const weight = [];
for (var i = minWeight; i <= maxWeight; i++) {
  weight.push({ label: i.toString(), value: i });
}
// height
const height = [];
for (var i = minHeight; i <= maxHeight; i++) {
  height.push({ label: i.toString(), value: i });
}
// bodyFatPercentage
const bodyFat = [];
for (var i = minBodyFat; i <= maxBodyFat; i++) {
  bodyFat.push({ label: i.toString(), value: i });
}
// sleepTime
const sleepTime = [];
for (var i = minSleepTime; i <= maxSleepTime; i++) {
  sleepTime.push({ label: i.toString(), value: i });
}

const goal = [
  { label: "Lose Weight", value: "lose-weight" },
  { label: "Build Muscles", value: "build-muscles" },
  { label: "Become Healthier", value: "become-healthier" },
];

const EditProfile = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);

  const user = supabase.auth.user();
  // Get User Input Data
  async function getHealthData() {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", supabase.auth.user().id);
    return data[0];
  }

  //get detailed data
  async function setDetailedData() {
    const data = await getHealthData();
    setValue1(data.Age);
    setValue2(data.Gender);
    setValue3(data.Weight);
    setValue4(data.Height);
    setValue5(data.BFP);
    setValue6(data.Sleep);
    setValue7(data.Goal);
  }
  // Render once only
  useEffect(() => {
    setDetailedData();
  }, []);

  const navigation = useNavigation();
  // enable navigation to next page only after userinput data is complete
  let isEnabled;

  // Insert into profiles table in Supabase
  async function doUpdate(values) {
    //console.log(values.gender)
    const { data, error } = await supabase.from("profiles").upsert({
      id: supabase.auth.user().id,
      Age: values.age,
      Gender: values.gender,
      Weight: values.weight,
      Height: values.height,
      BFP: values.bodyFatPercentage,
      Sleep: values.sleepTime,
      Goal: values.goal,
    });

    if (error) {
      Alert.alert("Error Updating", error.message, [
        { text: "OK", onPress: () => null },
      ]);
      //console.log("Error");
    } else {
      navigation.navigate("SettingsPage");
    }
  }

  const renderInner = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const renderHeader = () => <Text>Swipe down to close</Text>;

  //Bottom sheet
  const bs = createRef();
  const fall = new Animated.Value(1);

  return (
    <StyledContainer>
      {/*
      <StyledButton
          title="Open Bottom Sheet"
          onPress={() => bs.current.snapTo(0)}
        />
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      */}
      <StatusBar style="dark" />
      <InnerContainer>
        <ProfilePicture
          resizeMode="cover"
          source={require("./../assets/img/adaptive-icon.png")}
        />
        <ExitIcon onPress={() => navigation.navigate("SettingsPage")}>
          <Octicons name={"arrow-left"} size={30} color={black} />
        </ExitIcon>
        {/*<PageTitle2>Edit Profile</PageTitle2>*/}

        <StyledFormArea>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
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
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={goal}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Goal"
            searchPlaceholder="Search..."
            value={value7}
            onChange={(item) => {
              setValue7(item.value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                name={"arrow-forward-circle-outline"}
                size={25}
                color={grey}
              />
            )}
          />

          {value1 && value2 && value3 && value4 && value5 && value6 && value7
            ? (isEnabled = true)
            : (isEnabled = false)}
          {isEnabled ? (
            <StyledButton
              onPress={() => {
                let test = {
                  age: value1,
                  gender: value2,
                  weight: value3,
                  height: value4,
                  bodyFatPercentage: value5,
                  sleepTime: value6,
                  goal: value7,
                };
                //console.log(test.age);
                //console.log(test);
                doUpdate(test);
              }}
            >
              <ButtonText>Confirm</ButtonText>
            </StyledButton>
          ) : (
            <DisabledButton disabled={true}>
              <ButtonText>Confirm</ButtonText>
            </DisabledButton>
          )}
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    padding: 10,
    height: 45,
    backgroundColor: lightGrey,
    borderRadius: 8,
  },
  icon: {
    width: 25,
    height: 25,
  },
  dropdownTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 18,
  },
});

export default EditProfile;
