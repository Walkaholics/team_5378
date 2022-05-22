import React from 'react';
import styledComponents from 'styled-components';
import {
  InnerContainer,
  PageLogo,
  StyledContainer,
  SubTitleView,
  SubTitle,
  TextLink,
  TextLinkContent,
  StyledButton,
  ButtonText,
  StyledFormArea,
} from '../components/styles';

const Launch = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require('./../assets/img/logo.png')}
        />
        <StyledFormArea>
          <StyledButton>
            <ButtonText>Sign In</ButtonText>
          </StyledButton>
        </StyledFormArea>
        <SubTitleView>
          <SubTitle>Don't have an account? </SubTitle>
          <TextLink>
            <TextLinkContent>Sign up</TextLinkContent>
          </TextLink>
        </SubTitleView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Launch;
