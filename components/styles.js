import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const Colors = {
  primary: '#ffffff', //white
  secondary: 'rgb(255,153,48)', //theme color - orange
  tertiary: 'rgb(255,77,0)', // darker orange than 'secondary'
  grey: 'rgb(182,182,182)',
  lightGrey: 'rgb(250,249,249)',
  black: 'rgb(0,0,0)',
  red: 'rgb(250,0,0)',
};

const { primary, secondary, tertiary, grey, lightGrey, black, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  ${StatusBarHeight && `padding-top:${StatusBarHeight + 10}px`};
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 275px;
  height: 275px;
  margin-top: 50px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledGoalArea = styled.View`
  width: 90%;
  align-items: center;
`;

// features in launch, login and signup pages
export const PageTitle1 = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${black};
  padding-right: 30px;
  padding-bottom: 20px;
  margin-top: 75px;
  margin-bottom: 25px;
  text-align: left;
  font-family: 'Georgia';
`;

export const StyledTextInput1 = styled.TextInput`
  background-color: ${lightGrey};
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  margin-vertical: 3px;
  color: ${grey};
`;

export const LeftIcon1 = styled.View`
  padding: 23px 12px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 16px;
  position: absolute;
  z-index: 1;
`;

// features in userdata and usergoal pages
export const PageTitle2 = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${black};
  padding-right: 40px;
  padding-bottom: 5px;
  margin-top: 55px;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'Georgia';
`;

export const StyledTextInput2 = styled.TextInput`
  background-color: ${lightGrey};
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 10px;
  font-size: 16px;
  height: 55px;
  margin-bottom: 10px;
  margin-vertical: 2px;
  color: ${grey};
`;

export const LeftIcon2 = styled.View`
  padding: 17px 10px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${secondary};
  justify-content: center;
  margin-top: 15px;
  border-radius: 35px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Georgia';
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: 'Georgia';
  font-weight:bold;
  color: ${grey}};
`;

export const SubTitleView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 7px;
`;

// link to signup/signin page
export const TextLink = styled.TouchableOpacity`
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${secondary};
  font-size: 13px;
  font-weight: bold;
  font-family: 'Georgia';
`;

// clickable left arrow to exit to previous page
export const ExitView = styled.TouchableOpacity`
  align-items: center;
  right: 305px;
  top: 12px;
  position: absolute;
  z-index: 1;
`;

// error message when user input validation fails
export const ErrorMesssage = styled.Text`
  color: ${red};
  left: 10px;
  font-size: 14px;
  margin-bottom: 5px;
  font-family: 'Georgia';
`;
