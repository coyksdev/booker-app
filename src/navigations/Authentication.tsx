import React from 'react';
import {useNhostClient} from '@nhost/react';
import BottomTab from './BottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignupScreen from '../screens/authentication/LoginSignupScreen';
import SignupScreen from '../screens/authentication/SignupScreen';

export type AuthenticationStackParamList = {
  LoginSignup: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<AuthenticationStackParamList>();

const Authentication = () => {
  const nhost = useNhostClient();

  if (nhost.auth.isAuthenticated()) {
    return <BottomTab />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginSignup"
        component={LoginSignupScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
