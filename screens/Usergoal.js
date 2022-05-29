import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  InnerContainer,
  PageTitle2,
  StyledFormArea,
  StyledTextInput2,
  StyledButton,
  ButtonText,
  Colors,
  ExitView,
  GoalSelection,
  GoalSelectionText,
  GoalSelectionArea,
} from '../components/styles';
// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';

// Colors
const { grey, black } = Colors;

const Usergoal = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <GoalSelectionArea>
        <ExitView>
          <Octicons name={'arrow-left'} size={30} color={black} />
        </ExitView>
        <PageTitle2>What is Your Goal?</PageTitle2>
        <GoalSelection>
          <GoalSelectionText>Get Fitter</GoalSelectionText>
        </GoalSelection>
        <GoalSelection>
          <GoalSelectionText>Gain Weight</GoalSelectionText>
        </GoalSelection>
        <GoalSelection>
          <GoalSelectionText>Lose Weight</GoalSelectionText>
        </GoalSelection>
        <GoalSelection>
          <GoalSelectionText>Build Muscles</GoalSelectionText>
        </GoalSelection>
        <StyledButton>
          <ButtonText>Next</ButtonText>
        </StyledButton>
      </GoalSelectionArea>
    </StyledContainer>
  );
};

/* const UserTextInput = ({ ...props }) => {
  return (
    <View>
      <LeftIcon2>
        <Ionicons
          name={'arrow-forward-circle-outline'}
          size={25}
          color={grey}
        />
      </LeftIcon2>
      <StyledTextInput2 {...props} />
    </View>
  );
};*/

export default Usergoal;
