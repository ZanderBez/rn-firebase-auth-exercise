import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import ProfileScreen from './screens/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

//Navigation Container

const Stack = createNativeStackNavigator();


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("User is logged in:");

      } else {
        setIsLoggedIn(false);
        console.log("User is logged out");
      }
    });

    // TODO: research how to convert this code to use a useContext hook (better practice)

  }, []);

  return (
    <NavigationContainer>
      { isLoggedIn ? (
        // if user is logged in, show the main app screens
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        // if user is not logged in, show the login screen
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
      )
    }
    </NavigationContainer>
  );
}

// 1. setup the navigation for when a user is logged in
// 2. setup the navigation for when a user is logged out
// 3. listen to if a user is logged in or not