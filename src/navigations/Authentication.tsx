import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNhostClient} from '@nhost/react';
import BottomTab from './BottomTab';
import LoginSignupScreen from '../screens/authentication/LoginSignupScreen';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export default Authentication;
