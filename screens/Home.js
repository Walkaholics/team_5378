import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, FlatList, Image, Pressable, Button} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { getUser, supabase } from '../supabaseClient';
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

const Home = () => {
    const navigation = useNavigation();
    
    // For getting information from supabase session
    async function getUser() {
      const user = supabase.auth.user()
      console.log(user);
    }

    async function getSessionData() {
      const session = supabase.auth.session();
      console.log(session);
    }

    return (
        <StyledContainer>
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require('./../assets/img/adaptive-icon.png')}
          />
          <StyledFormArea>
            <StyledButton onPress={()=> navigation.navigate("SignIn")}>
              <ButtonText>Sign In</ButtonText>
            </StyledButton>
            
            <Button color="red" title="Get data" onPress={() => getSessionData()}></Button>
            <Button color="red" title="Get user" onPress={() => console.log(supabase.auth.user()?.id)}></Button>
            <Button color="red" title="Go Main Page test" onPress={()=> navigation.navigate("Tabs")}></Button>
            
          </StyledFormArea>
          <SubTitleView>
            <SubTitle>Don't have an account? </SubTitle>
            <TextLink onPress={() => navigation.navigate("SignUp")}>
                <TextLinkContent>Sign up</TextLinkContent>
            </TextLink>
          </SubTitleView>
        </InnerContainer>
      </StyledContainer>
    )

}

export default Home;