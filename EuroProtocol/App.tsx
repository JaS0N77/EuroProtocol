import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ParticipantAForm from './screens/ParticipantAForm';
import ParticipantBForm from './screens/ParticipantBForm';
import DamageScreen from './screens/DamageScreen';

export type RootStackParamList = {
  Home: undefined;
  ParticipantA: undefined;
  ParticipantB: undefined;
  Damage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Європротокол' }} />
        <Stack.Screen name="ParticipantA" component={ParticipantAForm} options={{ title: 'Учасник A' }} />
        <Stack.Screen name="ParticipantB" component={ParticipantBForm} options={{ title: 'Учасник B' }} />
        <Stack.Screen name="Damage" component={DamageScreen} options={{ title: 'Пошкодження' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
