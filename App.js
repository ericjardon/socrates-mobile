import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from './components/Start'
import BallotScreen from './components/Ballot'
import SealedBallotScreen from './components/SealedBallot'
import CardIDScreen from './components/CardID'
import ConfirmationScreen from './components/Confirmation'
import PhoneNumberScreen from './components/PhoneNumber'
import AuthScreen from './components/Auth'
import ElementosScreen from './components/Elementos'


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Elementos" component={ElementosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardID" component={CardIDScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Ballot" component={BallotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SealedBallot" component={SealedBallotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
