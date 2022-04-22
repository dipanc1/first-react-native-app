import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenB from './ScreenB';
import ScreenA from './ScreenA';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const App = () => {

  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'android';
              size = focused ? 40 : 30;
              color = focused ? '#fe0000' : '#000000';
            } else if (route.name === 'Screen_B') {
              iconName = 'bible';
              size = focused ? 40 : 30;
              color = focused ? '#fe0000' : '#000000';
            }
            return <FontAwesome5
              name={iconName}
              size={size}
              color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#ffffff',
          activeBackgroundColor: '#ff00d4',
          inactiveBackgroundColor: '#933535',
          // showLabel: false,
          labelStyle: {
            fontSize: 20,
          },
        }}
        activeColor="#00ff15"
        inactiveColor="#ffffff"
        // eslint-disable-next-line react-native/no-inline-styles
        barStyle={{ backgroundColor: '#933535' }}
      >
        <Tab.Screen name="Screen_A" component={ScreenA} options={{tabBarBadge: 3}}/>
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default App;
