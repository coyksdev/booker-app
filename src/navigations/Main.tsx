import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FillInfoScreen from '../screens/FillInfoScreen';
import Home from './Home';
import {useUserData} from '@nhost/react';
import * as _ from 'lodash';

const Stack = createStackNavigator();

const Main = () => {
  const userData = useUserData();

  const isInfoFilled = useMemo(() => {
    return !_.isEmpty(userData?.metadata);
  }, [userData?.metadata]);

  return (
    <Stack.Navigator initialRouteName={isInfoFilled ? 'HomeTab' : 'FillInfo'}>
      <Stack.Screen
        name="FillInfo"
        component={FillInfoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
