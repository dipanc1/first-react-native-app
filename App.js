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
  Modal,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react/cjs/react.development';



const App = () => {

  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [modal, setModal] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    }
    else {
      setModal(true);
    }
  };
  // can have three button ina NativeIntentAndroid, positiv negative, neurtal

  return (
    <View style={styles.body}>
      <Modal
        visible={modal}
        transparent
        onRequestClose={() => {
          setModal(false);
        }}
        animationType="fade"
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <Text style={styles.text}>Please enter a name longer than 3 characters</Text>
            <Pressable
              style={styles.warning_button}
              onPress={() => setModal(false)}
              android_ripple={{
                color: '#ff0000',
              }}
              >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Naam Likh Bai??</Text>
      <TextInput
        style={styles.input}
        placeholder="Naam"
        onChangeText={(text) => setName(text)}
      />
      <Pressable
        onPress={onPressHandler}
      >
        <View style={styles.button}>
          <Text style={styles.text1}>{submit ? 'Clear' : 'Submit'}</Text>
        </View>
      </Pressable>
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
});

export default App;
