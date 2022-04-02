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
      <View style={styles.view11}>

        <View style={styles.view1}>
          <Text style={styles.text}>
            1
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>
            2
          </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>
            3
          </Text>
        </View>
      </View>
      <View style={styles.view22}>
        <View style={styles.view4}>
          <Text style={styles.text}>
            4
          </Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>
            5
          </Text>
        </View>
      </View>
      <View style={styles.view33}>
        <View style={styles.view6}>
          <Text style={styles.text}>
            6
          </Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>
            7
          </Text>
        </View>
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
  view11: {
    flex: 1,
    flexDirection: 'row',
  },
  view22: {
    flex: 2,
    flexDirection: 'column',
  },
  view33: {
    flex: 6,
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#ff00c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#d9ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#ff1e00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#00ff55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#2200ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
  },
});

export default App;
