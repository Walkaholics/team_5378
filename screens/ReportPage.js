import { React, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { signOut, supabase } from '../supabaseClient';

import RNSpeedometer from 'react-native-speedometer';
import {
  StyledContainer,
  InnerContainer,
  ScrollContainer,
  PageTitle2,
  SubTitleView,
  DataViewR1,
  DataViewR2,
  DataTextR,
  BMRImage,
} from '../components/styles';

const ReportPage = () => {
  const navigation = useNavigation();
  const [BMI, setBMI] = useState('');
  const [BFP, setBFP] = useState('');
  const [BMR, setBMR] = useState('');

  const [isMale, setIsMale] = useState('');

  // Get User Input Data
  async function getHealthData() {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', supabase.auth.user().id);
    //.then(response => {return response})
    //console.log(data[0]);
    return data[0];
  }

  // get User Gender
  async function checkGender() {
    const data = await getHealthData();
    data.Gender == 'male' ? setIsMale(true) : setIsMale(false);
    //console.log(isMale);
  }

  // Calculate BMR
  async function handleBMR() {
    const data = await getHealthData();
    let bmr = 0;
    if (data.Gender == 'male') {
      console.log('you are male');
      // Formula: 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
      bmr =
        88.362 + 13.397 * data.Weight + 4.799 * data.Height - 5.677 * data.Age;
    } else if (data.Gender == 'female') {
      bmr =
        447.593 + 9.247 * data.Weight + 3.098 * data.Height - 4.33 * data.Age;
    } else {
      bmr = 0;
    }
    //console.log(bmr);
    setBMR(Math.round(bmr, 1));
  }
  handleBMR();

  // Calculate BMI & set BFP
  async function handleBMI() {
    const data = await getHealthData();
    //console.log("went through")
    let weight = data.Weight;
    let height = data.Height;
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //console.log(bmi);
    setBMI(bmi);
    setBFP(data.BFP);
  }
  handleBMI();
  //console.log(calculateBMI().then(response => {response}))

  async function getSessionData() {
    const session = supabase.auth.session();
    console.log(session);
  }

  return (
    <StyledContainer>
      <ScrollContainer>
        <PageTitle2>Your Report</PageTitle2>
        <DataViewR1>
          <DataTextR>Your BMI: </DataTextR>
          <RNSpeedometer
            value={parseFloat(BMI)}
            minValue={15.1}
            maxValue={28.3}
            size={200}
            allowedDecimals={2}
            labels={[
              {
                name: 'Underweight',
                labelColor: 'dodgerblue',
                activeBarColor: 'dodgerblue',
              },
              {
                name: 'Normal',
                labelColor: 'forestgreen',
                activeBarColor: 'forestgreen',
              },
              {
                name: 'Overweight',
                labelColor: 'orange',
                activeBarColor: 'orange',
              },
            ]}
          />
        </DataViewR1>
        <DataViewR1>
          <DataTextR>Your BFP: </DataTextR>
          {isMale ? (
            <RNSpeedometer
              value={parseInt(BFP)}
              minValue={12.5}
              maxValue={36.5}
              size={200}
              allowedDecimals={0}
              labels={[
                {
                  name: 'Healthy ',
                  labelColor: 'forestgreen',
                  activeBarColor: 'forestgreen',
                },
                {
                  name: 'Healthy',
                  labelColor: 'forestgreen',
                  activeBarColor: 'forestgreen',
                },
                {
                  name: 'Slightly Overweight',
                  labelColor: 'orange',
                  activeBarColor: 'orange',
                },
                {
                  name: 'Moderately Overweight',
                  labelColor: 'orangered',
                  activeBarColor: 'orangered',
                },
                {
                  name: 'Extremely Overweight',
                  labelColor: 'orangered',
                  activeBarColor: 'orangered',
                },
                {
                  name: 'Extremely Overweight ',
                  labelColor: 'orangered',
                  activeBarColor: 'orangered',
                },
              ]}
            />
          ) : (
            <RNSpeedometer
              value={parseInt(BFP)}
              minValue={14.5}
              maxValue={40}
              size={200}
              allowedDecimals={0}
              labels={[
                {
                  name: 'Underfat',
                  labelColor: 'dodgerblue',
                  activeBarColor: 'dodgerblue',
                },
                {
                  name: 'Healthy',
                  labelColor: 'forestgreen',
                  activeBarColor: 'forestgreen',
                },
                {
                  name: 'Slightly Overweight',
                  labelColor: 'orange',
                  activeBarColor: 'orange',
                },
                {
                  name: 'Moderately Overweight',
                  labelColor: 'orangered',
                  activeBarColor: 'orangered',
                },
                {
                  name: 'Extremely Overweight',
                  labelColor: 'red',
                  activeBarColor: 'red',
                },
              ]}
            />
          )}
        </DataViewR1>
        <DataViewR2>
          <DataTextR>Your BMR: {BMR} Calories </DataTextR>
          <BMRImage
            resizeMode="cover"
            source={require('./../assets/img/TDEE.png')}
          />
        </DataViewR2>
        <Button color="red" onPress={() => getHealthData()}>
          Health Data
        </Button>
        <Button color="red" onPress={() => getSessionData()}>
          get data
        </Button>
      </ScrollContainer>
    </StyledContainer>
  );
};

export default ReportPage;
