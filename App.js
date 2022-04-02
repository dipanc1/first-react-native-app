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


const App = () => {

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>
          Jatt di Mashook
        </Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>
          Jatt di Mashook di bhain
        </Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>
          Jatt di Mashook di bhain di saali
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex:1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex:1,
    backgroundColor: '#3300ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex:1,
    backgroundColor: '#48ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
  },
});

export default App;
