import React from 'react';
import {useAuthenticationStatus} from '@nhost/react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginSignupScreen from '../screens/authentication/LoginSignupScreen';
import LoginOrSignupScreen from '../screens/authentication/LoginOrSignupScreen';
import {Spinner, VStack} from 'native-base';
import Main from './Main';

export type LoginOrSignupProps = {
  isLogin?: boolean;
};

export type AuthenticationStackParamList = {
  LoginSignup: undefined;
  LoginOrSignup: LoginOrSignupProps;
};

const Stack = createStackNavigator<AuthenticationStackParamList>();

const Authentication = () => {
  const {isAuthenticated, isLoading} = useAuthenticationStatus();

  if (isLoading) {
    return (
      <VStack
        bgColor={'white'}
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}>
        <Spinner />
      </VStack>
    );
  }

  return (
    <>
      {isAuthenticated ? (
        <Main />
      ) : (
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
              headerShown: false,
            }}
            name="LoginOrSignup"
            component={LoginOrSignupScreen}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Authentication;
