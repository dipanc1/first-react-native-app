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
  Button,
  Linking,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Jatt di Application
      </Text>
      <Button title="jatt" onPress={()=>{Linking.openURL('https://dipan-portfolio.netlify.app');}}>Jatt</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#38ba68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default App;
