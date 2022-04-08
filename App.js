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
} from 'react-native';
import { useState } from 'react/cjs/react.development';



const App = () => {

  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Naam Likh Bai??</Text>
      <TextInput
      style={styles.input}
      placeholder="Naam"
      value={name}
      onChangeText={(text) => setName(text)}
      // keyboardType="numeric"
      keyboardType="default" // many types numeric , phone pad etc.
      multiline // to make it more than one line
      maxLength={2} // to limit the number of characters
      editable={true} // to make it editable
      secureTextEntry // to make it secure
      />
      <Text style={styles.text}>Tera Naam Hai {name}</Text>
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
