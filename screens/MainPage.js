import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/base";
import { supabase } from '../supabaseClient';

import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  InnerContainer,
  PageTitle1,
  StyledFormArea,
  SubTitle,
  StyledTextInput1,
  StyledButton,
  LeftIcon1,
  RightIcon,
  ButtonText,
  Colors,
  TextLink,
  TextLinkContent,
  SubTitleView,
} from '../components/styles';

// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Progress Bar
import CircularProgress from "react-native-circular-progress-indicator";

// Colors
const { grey, lightGrey } = Colors;



const MainPage = () => {
    const navigation = useNavigation();
    const user = supabase.auth.user();
    function getUser() {
      return user;
    }

    const [value, setValue] = useState(0);

    return (
        <StyledContainer>
          <InnerContainer>
            <StatusBar style="dark" />
              <PageTitle1>WELCOME</PageTitle1>
              
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
              
              <Button color="red" onPress={() => console.log(getUser())}>Get user</Button>
          </InnerContainer>
          
        </StyledContainer>
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