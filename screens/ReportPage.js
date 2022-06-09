import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { signOut, supabase } from '../supabaseClient';



const ReportPage = () => {
    const navigation = useNavigation();
    const [BMI, setBMI] = useState("")
    const [BFP, setBFP] = useState("")
    const [BMR, setBMR] = useState("")

    // Get User Input Data
    async function getHealthData() {
      const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id)
      //.then(response => {return response})
      //console.log(data[0]);
      return data[0];
    }

    // Calculate BMI
    async function handleBMR() {
      const data = await getHealthData();
      let bmr = 0;
      if (data.Gender == "Male") {
        console.log("you are male")
        // Formula: 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
        bmr = 88.362 + (13.397 * data.Weight) 
        + (4.799 * data.Height) 
        - (5.677 * data.Age)
      } else if (data.Gender == "Female" ) {
        bmr = 447.593 + (9.247 * data.Weight) 
        + (3.098 * data.Height) 
        - (4.330 * data.Age)
        
      } else {
        bmr = 0;
      }
      //console.log(bmr);
      setBMR(Math.round(bmr, 1));
    }
    handleBMR()

    async function handleBMI() {
      const data = await getHealthData();
      //console.log("went through")
      let weight = data.Weight;
      let height = data.Height;
      let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
      //console.log(bmi);
      setBMI(bmi);
      setBFP(data.BFP);
    }
    handleBMI()
    //console.log(calculateBMI().then(response => {response}))

    async function getSessionData() {
      const session = supabase.auth.session();
        console.log(session);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>REPORT PAGE</Text>
            <Button color="red" onPress={() => getHealthData()}>Health Data</Button>
            <Text>BMI: {BMI}</Text>
            <Text>BFP: {BFP}%</Text>
            <Text>BMR: {BMR} calories</Text>
            <Button color="red" onPress={() => getSessionData()}>get data</Button>
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

export default ReportPage;