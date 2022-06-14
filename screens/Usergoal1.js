import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
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
  RightIcon,
  CheckLogo,
} from '../components/styles';
// import icons
import { Octicons } from '@expo/vector-icons';
import styledComponents from 'styled-components';

// Colors
const { lightGrey, black, secondary, primary } = Colors;

const Usergoal1 = () => {
  const [cls, setCls] = useState('lightGrey');
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <ExitView>
        <Octicons name={'arrow-left'} size={30} color={black} />
      </ExitView>
      <PageTitle2>What is Your Goal?</PageTitle2>
      <UserGoalSelection>
        <GoalSelectionText>Get Fitter</GoalSelectionText>
      </UserGoalSelection>
      <UserGoalSelection>
        <GoalSelectionText>Gain Weight</GoalSelectionText>
      </UserGoalSelection>
      <UserGoalSelection>
        <GoalSelectionText>Lose Weight</GoalSelectionText>
      </UserGoalSelection>
      <UserGoalSelection>
        <GoalSelectionText>Build Muscles</GoalSelectionText>
      </UserGoalSelection>
      <StyledButton>
        <ButtonText>Next</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
};

const UserGoalSelection = ({ cls, ...props }) => {
  return (
    <GoalSelectionArea>
      <TouchableOpacity
        onClick={() =>
          setCls((cls) => (cls === 'lightGrey' ? 'orange' : 'lightGrey'))
        }
        style={cls === 'lightGrey' ? styles.lightGrey : styles.orange}
      >
        {cls !== 'lightGrey' && (
          <CheckLogo
            resizeMode="contain"
            source={require('./../assets/img/check-logo.png')}
          />
        )}
      </TouchableOpacity>
    </GoalSelectionArea>
  );
};

const styles = StyleSheet.create({
  lightGrey: {
    padding: 20,
    backgroundColor: primary,
    justifyContent: 'center',
    marginTop: 15,
    borderColor: lightGrey,
    borderRadius: 20,
    borderWidth: 3,
    marginVertical: 5,
    height: 80,
    alignItems: 'left',
  },
  orange: {
    padding: 20,
    backgroundColor: primary,
    justifyContent: 'center',
    marginTop: 15,
    borderColor: secondary,
    borderRadius: 20,
    borderWidth: 3,
    marginVertical: 5,
    height: 80,
    alignItems: 'left',
  },
});

export default Usergoal1;
