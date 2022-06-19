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
  StyledTextInput2,
  StyledButton,
  ButtonText,
  Colors,
  ExitView,
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

  // Insert User Goal into Profiles Table
  async function doUpdate(usergoal) {
    //console.log(values.gender)
    //console.log(usergoal)
    const { data, error } = await supabase
    .from('profiles')
    .upsert( 
      { id: supabase.auth.user().id,
        Goal: usergoal}
    )
    if (error) {
      Alert.alert("Error Updating", error.message, [
        { text: "OK", onPress: () => null },
      ]);
    //console.log("Error");
    } else {
      navigation.navigate("Tabs");
    }
  }

  // Get Health Data
  async function getHealthData() {
    const { data1, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', supabase.auth.user().id)
    //.then(response => {return response})
    //console.log(data[0]);
    return data1[0];
  }

  // Logic to create plan based on user goal
  async function createPlan(usergoal) {
    if (usergoal == "lose-weight") {
      const { data2, error2 } = await supabase
      .from('Exercise')
      .upsert([
        { id: supabase.auth.user().id, Day: "Monday", Name: "Push Up", Amount: "20 reps"},
        { id: supabase.auth.user().id, Day: "Monday", Name: "Crunches", Amount: "20 reps"},
        { id: supabase.auth.user().id , Day: "Tuesday", Name: "Sit Up", Amount: "20 reps" },
      ])
    }
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ExitView>
          <Octicons
            onPress={() => navigation.navigate('UserData')}
            name={'arrow-left'}
            size={30}
            color={black}
          />
        </ExitView>
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
          <StyledButton onPress={() => goal && doUpdate(goal) && createPlan(goal)}>
            <ButtonText>Next</ButtonText>
          </StyledButton>
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
