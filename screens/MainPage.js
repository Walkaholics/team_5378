import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { supabase } from '../supabaseClient';

import {
  StyledContainer,
  PageTitle2,
  Colors,
  UserinfoView,
  DataView,
  DataText,
  InnerContainer,
  ScrollContainer,
  ExitIcon,
  StyledButton,
} from '../components/styles';

// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Colors
const { grey, lightGrey, black } = Colors;

const MainPage = () => {
  const navigation = useNavigation();
  const user = supabase.auth.user();
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [BFP, setBFP] = useState('');
  const [sleepTime, setSleepTime] = useState('');
  const [healthData, setHealthData] = useState(null);

  // Get User Input Data
  async function getHealthData() {
    console.log("get health")
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    setHealthData(data[0])
    return data[0];
  }

  //get detailed data
  async function setDetailedData() {
    console.log("set health")
    const data = await getHealthData();
    //const data = healthData;
    setAge(data.Age);
    setGender(data.Gender);
    setWeight(data.Weight);
    setHeight(data.Height);
    setBFP(data.BFP);
    setSleepTime(data.Sleep);
  }
  // Render once only
  /*
  useEffect(() => {
    getHealthData();
    setDetailedData();
  }, []);
*/
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setDetailedData();
    });
    return unsubscribe;
  }, [navigation]);
  
  return (
    <StyledContainer>
      <StyledButton onPress={() => navigation.navigate('EditProfile')}>
          <DataText> 
            Edit Profile
          </DataText>
      </StyledButton>
      <ScrollContainer>
        <PageTitle2>WELCOME!😊</PageTitle2>
        <UserinfoView>
          <DataView>
            <DataText>Age: {age}</DataText>
          </DataView>
          <DataView>
            <DataText>Gender: {gender}</DataText>
          </DataView>
          <DataView>
            <DataText>Weight: {weight}kg</DataText>
          </DataView>
          <DataView>
            <DataText>Height: {height}cm</DataText>
          </DataView>
          <DataView>
            <DataText>Body Fat Percentage: {BFP}%</DataText>
          </DataView>
          <DataView>
            <DataText>Sleep Time: {sleepTime} hours</DataText>
          </DataView>
        </UserinfoView>
        {/*
        <Button color="red" onPress={() => console.log(getUser())}>
          Get user
        </Button>
        */}
      </ScrollContainer>
    </StyledContainer>
  );
};

export default MainPage;
