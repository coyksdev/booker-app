import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import HomeIcon from '../../assets/icons/svgs/home.svg';
import HomeSelectedIcon from '../../assets/icons/svgs/home-selected.svg';
import ExploreScreen from '../screens/ExploreScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            if (focused) {
              return <HomeSelectedIcon />;
            }
            return <HomeIcon />;
          } else if (route.name === 'Explore') {
            if (focused) {
              return <HomeSelectedIcon />;
            }
            return <HomeIcon />;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
