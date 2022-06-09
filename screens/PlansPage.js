import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { signOut, supabase } from '../supabaseClient';
import { BMI } from '../screens/ReportPage'



const PlansPage = () => {
    const navigation = useNavigation();

    // Sign user out of Supabase
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

    async function getSessionData() {
      const session = supabase.auth.session();
        console.log(session);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>PLANS PAGE</Text>
            <Text>BMI: {BMI}</Text>
            <Button color="red" onPress={() => getHealthData()}>Health Data</Button>
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

export default PlansPage;