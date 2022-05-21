import { React, useState } from "react";
import { StyleSheet, View, SafeAreaView, Alert} from "react-native";
import { Text } from "@rneui/themed"; 
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { signIn, supabase } from '../supabaseClient';
import { Input } from "@rneui/themed";


const SignIn = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function doSignIn() {
      const { user, session, error } = await signIn(email, password);
      if (error) {
        
        Alert.alert("Error Signing Up", error.message, [
          { text: "OK", onPress: () => null },
        ]);
      //console.log("Error");
      } else {
        navigation.navigate("MainPage");
      }

    }


    return (
        <SafeAreaView style={styles.container}>
            <Text>This is SignIn</Text>
            <Input placeholder="Email" 
              onChangeText={(text) => setEmail(text)}
            />
            <Input placeholder="Password" secureTextEntry={true} 
              onChangeText={(text) => setPassword(text)}
            />
            <Button color="warning" onPress={() => doSignIn()}>Confirm Sign In</Button>
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

export default SignIn;