import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { signUp, supabase } from '../supabaseClient';
import { Input } from "@rneui/themed";
import { disableExpoCliLogging } from "expo/build/logs/Logs";

const SignUp = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    console.log(password);

    async function doLogin() {
      const { user, session, error } = await signUp(email, password);
      if (error) {
        
        Alert.alert("Error Signing Up", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      }
      else {
        navigation.navigate("MainPage");
      }
    }

    return (
        <SafeAreaView style={styles.container}>
          <Input placeholder="Email" 
            onChangeText={(text) => setEmail(text)}
          />

          <Input placeholder="Password" secureTextEntry={true} 
            onChangeText={(text) => setPassword(text)}
          />
          <Button color="warning" onPress={() => doLogin()}>Confirm SignUp</Button>
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

export default SignUp;