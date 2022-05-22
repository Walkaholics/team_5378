import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: 'ff9930',
  tertiary: 'ff4d00',
  grey: 'rgb(182,182,182)',
  lightGrey: 'rgb(250,249,249)',
  black: 'rgb(0,0,0)',
};

const { primary, secondary, tertiary, grey, lightGrey, black } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  ${StatusBarHeight && `padding-top:${StatusBarHeight}px`};
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 350px;
  height: 350px;
  margin-top: 150px;
`;

export const PageTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${black};
  padding: 20px;
  margin-top: 125px;
  text-align: left;
  font-family: 'Georgia';
  line-height: 45px;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  margin-top: 100px;
  font-weight: bold;
  font-family: 'Georgia';
  color: ${grey};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${lightGrey};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  margin-vertical: 3px;
  color: ${grey};
`;

export const StyledInputLabel = styled.Text`
  color: ${grey};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${grey};
  justify-content: center;
  align-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
