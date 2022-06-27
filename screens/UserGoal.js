import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';
// import simpleSelectButton Package
import SimpleSelectButton from 'react-native-simple-select-button';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  StyledContainer,
  InnerContainer,
  PageTitle2,
  StyledFormArea,
  StyledButton,
  DisabledButton,
  ButtonText,
  Colors,
  ExitIcon,
} from '../components/styles';
// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import styledComponents from 'styled-components';
import { userData, supabase } from '../supabaseClient';

// Colors
const { lightGrey, black, secondary, primary } = Colors;

const UserGoal = () => {
  const [goal, setGoal] = useState('');
  const button_list = [
    { label: 'Lose Weight', value: 'lose-weight' },
    { label: 'Build Muscles', value: 'build-muscles' },
    { label: 'Become Healthier', value: 'become-healthier' },
  ];
  const navigation = useNavigation();
  //enable button navigation to next page only after user has chosen a goal
  let isEnabled;

  // Insert User Goal into Profiles Table
  async function doUpdate(usergoal) {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: supabase.auth.user().id, Goal: usergoal });
    if (error) {
      Alert.alert('Error Updating', error.message, [
        { text: 'OK', onPress: () => null },
      ]);
      //console.log("Error");
    } else {
      navigation.navigate('Tabs');
    }
  }

  // Get Health Data
  async function getHealthData() {
    const { data1, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    return data1[0];
  }

  // Logic to create plan based on user goal
  async function createPlan(usergoal) {
    if (usergoal == "build-muscles") {
      const { data, error } = await supabase.from("Exercise").upsert([
        {
          id: supabase.auth.user().id,
          Name: "Abs",
          Day: 1,
          Amount: "2x 10reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Push-ups",
          Day: 1,
          Amount: "3x 8reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Sit-ups",
          Day: 2,
          Amount: "2x 20reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Crunches",
          Day: 2,
          Amount: "2x 10reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Squats",
          Day: 3,
          Amount: "2x 20reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Cardio",
          Day: 3,
          Amount: "30mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Planks",
          Day: 5,
          Amount: "4x 90s",
        },
        {
          id: supabase.auth.user().id,
          Name: "Pull-ups",
          Day: 5,
          Amount: "5x 6reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Barbell Curls",
          Day: 7,
          Amount: "3x 25reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Burpees",
          Day: 7,
          Amount: "3x 8reps",
        },
      ]);
    } else if (usergoal == "become-healthier") {
      const { data, error } = await supabase.from("Exercise").upsert([
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 1,
          Amount: "7500",
        },
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 2,
          Amount: "7500",
        },
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 3,
          Amount: "7500",
        },
        {
          id: supabase.auth.user().id,
          Name: "Body Yoga",
          Day: 4,
          Amount: "10mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 5,
          Amount: "7500",
        },
        {
          id: supabase.auth.user().id,
          Name: "Swim/Ball Sports",
          Day: 6,
          Amount: "30mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 7,
          Amount: "12000",
        },
      ]);
    } else if (usergoal == "lose-weight") {
      const { data, error } = await supabase.from("Exercise").upsert([
        {
          id: supabase.auth.user().id,
          Name: "Rower",
          Day: 1,
          Amount: "30mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Jumping Jacks",
          Day: 1,
          Amount: "6x 30reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Squats",
          Day: 2,
          Amount: "5x 15reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Elliptical",
          Day: 2,
          Amount: "30mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "HIIT",
          Day: 3,
          Amount: "20mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Steps",
          Day: 4,
          Amount: "12000",
        },
        {
          id: supabase.auth.user().id,
          Name: "Pull-ups",
          Day: 5,
          Amount: "5x 10reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Jump Rope",
          Day: 5,
          Amount: "5x 200reps",
        },
        {
          id: supabase.auth.user().id,
          Name: "Indoor Cycle",
          Day: 7,
          Amount: "30mins",
        },
        {
          id: supabase.auth.user().id,
          Name: "Burpees",
          Day: 7,
          Amount: "3x 10reps",
        },
      ]);
    }
  
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ExitIcon>
          <Octicons
            onPress={() => navigation.navigate('UserData')}
            name={'arrow-left'}
            size={30}
            color={black}
          />
        </ExitIcon>
        <PageTitle2>What is Your Goal?</PageTitle2>
        <View
          style={{
            marginTop: 35,
            width: Dimensions.get('screen').width - 65,
          }}
        >
          <FlatList
            data={button_list}
            keyExtractor={(item) => item.value}
            extraData={goal}
            renderItem={({ item }) => (
              <SimpleSelectButton
                style={styles.goals}
                onPress={() => {
                  setGoal(item.value);
                  // console.log(goal);
                }}
                isChecked={goal === item.value}
                text={item.label}
                textSize={20}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={25}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
              />
            )}
          />
          {goal ? (isEnabled = true) : (isEnabled = false)}
          {isEnabled ? (
            <StyledButton
              onPress={() => goal && doUpdate(goal) && createPlan(goal)}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          ) : (
            <DisabledButton disabled={true}>
              <ButtonText>Next</ButtonText>
            </DisabledButton>
          )}
        </View>
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  goals: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 20,
  },
});

export default UserGoal;
