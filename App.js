
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { Button } from "@rneui/base";
import { Header } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { supabase } from './supabaseClient';

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './StackNavigator';
//import { HomeScreenStack } from "./screens/HomeStack";
//import { supabaseUrl } from './supabaseClient';

//Client
/*
const supabaseUrl = "https://xpiordhecqmaqsczvzgs.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwaW9yZGhlY3FtYXFzY3p2emdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI1MDU1NzIsImV4cCI6MTk2ODA4MTU3Mn0.lj3qTl5s0DYt-6gckUkTWVDkVj2gGS6jhA6ykLEe4iw"
const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/

//export default App = () => {
export default function App() {
  console.log("App executed");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )


  {/*
  return (
    <View style={styles.container}>
      <Button color="warning">Warning</Button>
    </View>
  );
  }
*/}




{/*
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text> Orbital 2</Text>
      <StatusBar style="auto" />
      <Button color="warning" onPress={()=> console.log("Clicked")}>Warning</Button>
    </SafeAreaView>
  );
  */}

  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



























/*

//import './index.css'

import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient.js'
import Auth from './components/Auth'
import Account from './components/Account'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
    
  )
}
*/