import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, FlatList, Image} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { getUser, supabase } from '../supabaseClient';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image
            source={ require("../assets/favicon.png")}
            containerStyle={styles.item}
            PlaceholderContent={<ActivityIndicator />}
            />
            <Text>This is Home</Text>
            <Button color="warning" onPress={()=> navigation.navigate("SignIn")}>Go Sign in</Button>
            <Button color="warning" onPress={()=> navigation.navigate("SignUp")}>Sign Up</Button>
            <Button color="red" onPress={() => console.log(getUser())}>Get user test</Button>
            <Button color="red" onPress={()=> navigation.navigate("AccountPage")}>Go Account Page test</Button>
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

export default Home;