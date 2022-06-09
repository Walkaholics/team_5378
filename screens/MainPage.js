import React from "react";
import { StyleSheet, View, Text, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { getUser, supabase } from '../supabaseClient';
import {
  InnerContainer,
  PageLogo,
  StyledContainer,
  SubTitleView,
  SubTitle,
  TextLink,
  TextLinkContent,
  StyledButton,
  ButtonText,
  StyledFormArea,
} from '../components/styles';

const MainPage = () => {
    const navigation = useNavigation();
    const user = supabase.auth.user();
    function getUser() {
      return user;
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text>WELCOME</Text>
            <Text>MAIN PAGE</Text>
            <Button color="red" onPress={() => console.log(getUser())}>Get user</Button>
            {/*<Button color="warning" onPress={()=> navigation.navigate("SettingsPage")}>Settings</Button>
            <Button color="warning" onPress={() => navigation.navigate("ReportPage")}>Report</Button>
            */}
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

export default MainPage;