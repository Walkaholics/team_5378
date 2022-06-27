import React, { useState } from 'react';
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
} from '../components/styles';

// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Colors
const { grey, lightGrey } = Colors;

const MainPage = () => {
  const navigation = useNavigation();
  const user = supabase.auth.user();
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [BFP, setBFP] = useState('');
  const [sleepTime, setSleepTime] = useState('');

  // Get User Input Data
  async function getHealthData() {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    return data[0];
  }

  //get detailed data
  async function setDetailedData() {
    const data = await getHealthData();
    setAge(data.Age);
    setGender(data.Gender);
    setWeight(data.Weight);
    setHeight(data.Height);
    setBFP(data.BFP);
    setSleepTime(data.Sleep);
  }
  setDetailedData();
  return (
    <StyledContainer>
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
