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
  TextInput,
  // TouchableOpacity,
  TouchableWithoutFeedback,
  // TouchableHighlight,
  // Button,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react/cjs/react.development';



const App = () => {

  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Naam Likh Bai??</Text>
      <TextInput
        style={styles.input}
        placeholder="Naam"
        onChangeText={(text) => setName(text)}
      />

      {/* similar to buttons in react native */}
      {/* <TouchableOpacity
      activeOpacity={1}
        style={styles.button}
        onPress={() => setSubmit(!submit)}
      >
        <Text style={styles.text1}>{submit ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
      underlayColor={'#fff'}
        activeOpacity={1}
        style={styles.button}
        onPress={() => setSubmit(!submit)}
      >
        <Text style={styles.text1}>{submit ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => setSubmit(!submit)}
      >
        <Text style={styles.text1}>{submit ? 'Clear' : 'Submit'}</Text>
      </TouchableWithoutFeedback> */}
      <Pressable onPress={() => setSubmit(!submit)}>
        <View style={styles.button}>
          <Text style={styles.text1}>{submit ? 'Clear' : 'Submit'}</Text>
        </View>
      </Pressable>
      {/* <Button
        title={submit ? 'Hide' : 'Show'}
        onPress={() => setSubmit(!submit)}
      disabled={name === ''}
      color={name === '' ? 'red' : 'green'}
      /> */}
      {submit ?
        <Text style={styles.text}>Tera Naam Hai {name}</Text>
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
});

export default App;
