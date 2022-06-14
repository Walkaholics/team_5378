import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import dropdown component
import { Dropdown } from 'react-native-element-dropdown';
import {
  StyledContainer,
  InnerContainer,
  PageTitle2,
  StyledFormArea,
  StyledGoalArea,
  StyledTextInput2,
  StyledButton,
  ButtonText,
  Colors,
  ExitView,
} from '../components/styles';
// import icon
import { Octicons, Ionicons } from '@expo/vector-icons';

import styledComponents from 'styled-components';

// Colors
const { tertiary, black } = Colors;

//dropdown data
// fitness goals
const goal = [
  { label: 'Lose Weight', value: 'lose-weight' },
  { label: 'Build Muscles', value: 'build-muscles' },
  { label: 'Get Healthier', value: 'get-healthier' },
];
const Usergoal = () => {
  const [value, setValue] = useState(null);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ExitView>
          <Octicons name={'arrow-left'} size={30} color={black} />
        </ExitView>
        <PageTitle2>Pick One Goal To Get Started</PageTitle2>
        <StyledGoalArea>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={goal}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select..."
            value={value}
            searchPlaceholder="Search..."
            onChange={(item) => {
              setValue(item.value);
              // console.log(value);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                name={'checkbox-outline'}
                size={25}
                color={black}
              />
            )}
          />
        </StyledGoalArea>
        <StyledFormArea>
          <StyledButton>
            <ButtonText>Next</ButtonText>
          </StyledButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 100,
    marginTop: 80,
    padding: 25,
    height: 200,
    width: 350,
    borderColor: tertiary,
    borderWidth: 5,
    borderRadius: 8,
  },
  icon: {
    marginRight: 18,
  },
  placeholderStyle: {
    fontSize: 35,
    fontFamily: 'Georgia',
  },
  selectedTextStyle: {
    height: 40,
    fontSize: 35,
    fontFamily: 'Georgia',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  inputSearchStyle: {
    height: 80,
    fontSize: 35,
  },
});
export default Usergoal;
