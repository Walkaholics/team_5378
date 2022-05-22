import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import formik
import { Formik } from 'formik';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  StyledTextInput,
  StyledButton,
  LeftIcon,
  RightIcon,
  ButtonText,
  Colors,
  TextLink,
  TextLinkContent,
  SubTitleView,
} from '../components/styles';

// import icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Colors
const { grey } = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Create your Account</PageTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <UserTextInput
                label="Email Address"
                icon="mail"
                placeholder="Email"
                placeholderTextColor={grey}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <UserTextInput
                label="Password"
                icon="lock"
                placeholder="Password"
                placeholderTextColor={grey}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Sign Up</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
        <SubTitleView>
          <SubTitle>Already have an account? </SubTitle>
          <TextLink>
            <TextLinkContent>Sign in</TextLinkContent>
          </TextLink>
        </SubTitleView>
      </InnerContainer>
    </StyledContainer>
  );
};

const UserTextInput = ({
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={20} color={grey} />
      </LeftIcon>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={grey}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Signup;
