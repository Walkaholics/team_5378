import { React, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Alert } from 'react-native';
import { Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { signOut, supabase } from '../supabaseClient';

const SettingsPage = () => {
  const navigation = useNavigation();

  // Sign user out of Supabase
  async function doSignOut() {
    const { error } = await signOut();
    if (error) {
      Alert.alert('Error Signing Out', error.message, [
        { text: 'OK', onPress: () => null },
      ]);
    } else {
      navigation.navigate('Launch');
    }
  }

  async function getSessionData() {
    const session = supabase.auth.session();
    console.log(session);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Account Details</Text>
      <Button color="red" onPress={() => getSessionData()}>
        get data
      </Button>
      <Button color="red" onPress={() => navigation.navigate('UserGoal')}>
        user goal
      </Button>
      <Button color="warning" onPress={() => navigation.navigate('UserData')}>
        Update Profile
      </Button>
      <Button color="warning" onPress={() => doSignOut()}>
        Sign Out
      </Button>

      {/*<Button color="warning" onPress={() => navigation.navigate("MainPage")}>Main</Button>
            <Button color="warning" onPress={() => navigation.navigate("ReportPage")}>Report</Button>
            */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsPage;
