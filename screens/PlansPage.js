import { React, useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { signOut, supabase } from '../supabaseClient';

import {
  StyledContainer,
  InnerContainer,
  ScrollContainer,
  PageTitle2,
  PlanspageView,
  SubTitleView,
  ProgressText,
  WeeksView,
  WeeksText,
  ExerciseSwitch,
  ExerciseView,
  ExerciseText,
  Colors,
} from '../components/styles';
// Progress Bar
import CircularProgress from 'react-native-circular-progress-indicator';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
// Colors
const { primary, secondary, grey } = Colors;

const PlansPage = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [goal, setGoal] = useState('');
  //sample styling without selecting plans from Exercise table in supabase
  //after using real data from supabase, need to add useState variables for multiple switches
  const [completed, setCompleted] = useState(false);
  const toggleSwitch = () => setCompleted((previousState) => !previousState);

  /*// Get user goal
  async function getUserGoal() {
    const data = await getHealthData();
    let GOAL = data.Goal;
    setGoal(GOAL);
  }*/

  // Get user health data
  async function getHealthData() {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    //.then(response => {return response})
    //console.log(data[0]);
    return data[0];
  }

  // Get Fitness Plan
  async function getPlan() {
    const { data, error } = await supabase
      .from('Exercise')
      .select()
      .eq('id', supabase.auth.user().id);
    return data;
    //console.log(data);
  }

  // Get Percentage of Excercises completed this week
  async function getProgress() {
    const exerciseArray = await getPlan(); // Array of different objects(exercises)
    for (const i in exerciseArray) {
      //console.log(exerciseArray[i]);
      if (exerciseArray[i].Status == 1) {
        console.log('excerise is done');
        setProgress(progress + 1);
      }
      //console.log(i);
    }
    //console.log(progress)
    console.log((progress / exerciseArray.length) * 100);
    return (progress / exerciseArray.length) * 100;
    //console.log(data3);
  }

  return (
    <StyledContainer>
      <ScrollContainer>
        <PageTitle2>Your Weekly Fitness Plan</PageTitle2>
        <PlanspageView>
          <CircularProgress
            radius={90}
            value={80}
            fontSize={20}
            valueSuffix={'%'}
            activeStrokeColor={secondary}
            inActiveStrokeColor={grey}
            inActiveStrokeOpacity={0.2}
            inActiveStrokeWidth={6}
            duration={3000}
            onAnimationComplete={() => setValue(50)}
          />
          <ProgressText>Weekly Goal Completed</ProgressText>
        </PlanspageView>
        <View>
          {/*sample styling without selecting plans from Exercise table in supabase*/}
          <WeeksView>
            <WeeksText>Monday</WeeksText>
            <ExerciseView>
              <ExerciseText>Abs 2x 10reps</ExerciseText>
              <ExerciseSwitch
                trackColor={{ false: primary, true: secondary }}
                thumbColor={primary}
                ios_backgroundColor={primary}
                onValueChange={toggleSwitch}
                value={completed}
              />
            </ExerciseView>
            <ExerciseView>
              <ExerciseText>Push-ups 3x 8reps</ExerciseText>
              <ExerciseSwitch
                trackColor={{ false: primary, true: secondary }}
                thumbColor={primary}
                ios_backgroundColor={primary}
                onValueChange={toggleSwitch}
                value={completed}
              />
            </ExerciseView>
          </WeeksView>
          <WeeksView>
            <WeeksText>Tuesday</WeeksText>
          </WeeksView>
          <WeeksView>
            <WeeksText>Wednesday</WeeksText>
          </WeeksView>
          <WeeksView>
            <WeeksText>Thursday</WeeksText>
          </WeeksView>
          <WeeksView>
            <WeeksText>Friday</WeeksText>
          </WeeksView>
          <WeeksView>
            <WeeksText>Saturday</WeeksText>
          </WeeksView>
          <WeeksView>
            <WeeksText>Sunday</WeeksText>
          </WeeksView>
        </View>
        <Button color="red" onPress={() => getHealthData()}>
          Health Data
        </Button>
        <Button color="red" onPress={() => getPlan()}>
          get plan
        </Button>
        <Button color="red" onPress={() => getProgress()}>
          get progress
        </Button>
        {/*<Button color="warning" onPress={() => navigation.navigate("MainPage")}>Main</Button>*/}
      </ScrollContainer>
    </StyledContainer>
  );
};

export default PlansPage;
