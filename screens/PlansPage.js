import { React, useState, useEffect } from 'react';
import { Text, View, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { supabase } from '../supabaseClient';

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
  StyledButton,
  ExerciseDoneText,
} from '../components/styles';
// Progress Bar
import CircularProgress from 'react-native-circular-progress-indicator';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { set } from 'react-native-reanimated';


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





  const toggleSwitch = (row) => {
    if (completed) {
      console.log("hehe")
    } else {
      console.log("huh")
    }
    setCompleted((previousState) => !previousState);
  
  }

  // Updates 'Status' column of Excercise table
  async function updateStatus(row) { 
    let value = 1;
    //console.log(row)
    setCompleted((previousState) => !previousState);
    console.log(completed)
    const { data, error } = await supabase
      .from('Exercise')
      .upsert({ Row: row, Status: value });
      if (error) {
        Alert.alert('Error Updating', error.message, [
          { text: 'OK', onPress: () => null },
        ]);
      }
  }


  // Get user health data
  async function getHealthData() {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    return data[0];
  }

  const [plan, setPlan] = useState([]);


  // Get Fitness Plan
  async function getPlan() {
    //console.log("plan running")
    const { data, error } = await supabase
      .from('Exercise')
      .select()
      .eq('id', supabase.auth.user().id)
      .order('Day', { ascending: true });
    setPlan(data)
  }

  // Render once only
  useEffect(() => {
    getPlan();
    getProgress();
  }, []);

  // Render on clicking switch
  useEffect(() => {
    getPlan();
    getProgress();
  }, [completed]);

  // Get Percentage of Excercises completed this week
  async function getProgress() {
    let { data, error, status } = await supabase
    .from("Exercise")
    .select("*", { count: 'exact'}) // if you don't want to return any rows, you can use { count: 'exact', head: true }
    .eq("Status", 1);
    //console.log(data.length/plan.length * 100);
    setProgress(data.length/plan.length * 100)
    console.log("progress" + progress)
  }

  // Convert to day names
  function dayStringConverter(i) {
    if (i == 2) {
      return "Tuesday";
    } else if (i == 3) {
      return "Wednesday"
    } else if (i == 4) {
      return "Thursday"
    } else if (i == 5) {
      return "Friday"
    } else if (i == 6) {
      return "Saturday"
    } else if (i == 7) {
      return "Sunday"
    }
  }

  function progressValue(i) {
    if (typeof i == 'number') {
      console.log("lol")
      return i;
    } else {
      return 0;
    }
  }

  return (
      <StyledContainer>
      <ScrollContainer>
        <PageTitle2>Your Weekly Fitness Plan</PageTitle2>
        <PlanspageView>
          <CircularProgress
              radius={90}
              value={progress}
              fontSize={20}
              valueSuffix={'%'}
              activeStrokeColor={secondary}
              inActiveStrokeColor={grey}
              inActiveStrokeOpacity={0.2}
              inActiveStrokeWidth={6}
              duration={2000}
              onAnimationComplete={() => setValue(50)}
          />
          <ProgressText>Weekly Goal Completed</ProgressText>
        </PlanspageView>
        <View>
            {
              plan.map((item, index) => {
                if (index == 0) { // Very first exercise on Monday
                  if (item.Status != 1) { // Exercise not completed
                  return <View key={index} >
                  <WeeksText>Monday</WeeksText>
                  <ExerciseView>
                    <ExerciseText> {item.Name} + {item.Amount} </ExerciseText>
                    <ExerciseSwitch
                      trackColor={{ false: primary, true: secondary }}
                      thumbColor={primary}
                      ios_backgroundColor={primary}
                      onValueChange={() => updateStatus(item.Row)}
                      value={true}
                    />
                  </ExerciseView>
                  </View>;
                  } else { // Exercise Completed
                    return <View key={index}>
                    <WeeksText>Monday</WeeksText>
                    <ExerciseDoneText> {item.Name} + {item.Amount} - DONE! </ExerciseDoneText>
                    </View>;
                  }
                  
                } 
                
                else if (item.Day == plan[index - 1].Day){  //Current exercise is same day as previous
                  if (item.Status != 1) {
                  return <ExerciseView key={index}>
                    <ExerciseText> {item.Name} + {item.Amount} </ExerciseText>
                    <ExerciseSwitch
                      trackColor={{ false: primary, true: secondary }}
                      thumbColor={primary}
                      ios_backgroundColor={primary}
                      onValueChange={() => updateStatus(item.Row)}
                      value={true}
                    />
                  </ExerciseView>;
                  } else {
                    return <View key={index}>
                    <ExerciseDoneText> {item.Name} + {item.Amount} - DONE! </ExerciseDoneText>
                    </View>;
                  }
                } else { // Next Day
                  if (item.Status != 1) {
                  return <View key={index}>
                  <WeeksText>{dayStringConverter(item.Day)}</WeeksText>
                  <ExerciseView>
                    <ExerciseText> {item.Name} + {item.Amount} </ExerciseText>
                    <ExerciseSwitch
                      trackColor={{ false: primary, true: secondary }}
                      thumbColor={primary}
                      ios_backgroundColor={primary}
                      onValueChange={() => updateStatus(item.Row)}
                      value={true}
                    />
                  </ExerciseView>
                  </View>;
                  } else {
                    return <View key={index}>
                    <WeeksText>{dayStringConverter(item.Day)}</WeeksText>
                    <ExerciseDoneText> {item.Name} + {item.Amount} - DONE! </ExerciseDoneText>
                    </View>;
                  }
                }
              
                  
              })
            }
        </View>
        {/*
        <Button color="red" onPress={() => getHealthData()}>
          Health Data
        </Button>
        <Button color="red" onPress={() => getPlan()}>
          get plan
        </Button>
        <Button color="red" onPress={() => getProgress()}>
          get progress
        </Button>
        */}
      </ScrollContainer>
    </StyledContainer>
  );
};


export default PlansPage;
