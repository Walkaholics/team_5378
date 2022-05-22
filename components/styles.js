import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: 'rgb(255,153,48)',
  tertiary: 'rgb(255,77,0)',
  grey: 'rgb(182,182,182)',
  lightGrey: 'rgb(250,249,249)',
  black: 'rgb(0,0,0)',
};

const { primary, secondary, tertiary, grey, lightGrey, black } = Colors;

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

export const PageTitle = styled.Text`
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

export const LeftIcon = styled.View`
  left: 15px;
  top: 23px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 16px;
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

export const TextLink = styled.TouchableOpacity`
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${secondary};
  font-size: 13px;
  font-weight: bold;
  font-family: 'Georgia';
`;
