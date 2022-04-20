/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScreenA = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
      style={({pressed})=> ({backgroundColor: pressed ? 'red' : 'green'})}
      onPress={() => {
        alert('Pressed');
      }}>
      >
      <Text style={styles.text}>Go To Screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text1}>Screen B</Text>
    </View>
  );
};


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontSize: 25,
  },
  text1: {
    color: '#fe0000',
    fontSize: 15,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 100,
    borderRadius: 10,
  },
  warning_button: {
    backgroundColor: '#f60808',
    width: 300,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
  },
});

export default App;
