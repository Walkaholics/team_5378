import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { signOut, supabase } from '../supabaseClient';
import { BMI } from '../screens/ReportPage'
import HSBar from "react-horizontal-stacked-bar-chart";

// Progress Bar
import CircularProgress from "react-native-circular-progress-indicator";



const PlansPage = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(0);
    const [progress, setProgress] = useState(0);

    // Get use health data
    async function getHealthData() {
      const { data, error } = await supabase
      .from('profiles')
      .select()
      console.log(data.Age);

      if (error) {
        Alert.alert("Error Signing Out", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      }
    }

    // Get Fitness Plan
    async function getPlan() {
      const { data, error } = await supabase
      .from('Exercise')
      .select()
      .eq('id', supabase.auth.user().id)
      return data;
      //console.log(data);
    }

    // Get Percentage of Excercises completed this week
    async function getProgress() {
      const exerciseArray = await getPlan(); // Array of different objects(exercises)
      for (const i in exerciseArray) {
      //console.log(exerciseArray[i]);
        if (exerciseArray[i].Status == 1) {
          console.log("excerise is done")
          setProgress(progress + 1)
        }
      //console.log(i);
     }
     //console.log(progress)
     console.log(progress/exerciseArray.length * 100)
     return progress/exerciseArray.length * 100;
      //console.log(data3);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>PLANS PAGE</Text>
            <Text>BMI: {BMI}</Text>
          
            <CircularProgress
                radius={90} 
                value={85}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={6}
                duration={3000}
                onAnimationComplete={() => setValue(50)}
              />
            <Button color="red" onPress={() => getHealthData()}>Health Data</Button>
            <Button color="red" onPress={() => getPlan()}>get plan</Button>
            <Button color="red" onPress={() => getProgress()}>get progress</Button>
            {/*<Button color="warning" onPress={() => navigation.navigate("MainPage")}>Main</Button>*/}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PlansPage;