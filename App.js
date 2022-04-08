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
  // Alert,
  ToastAndroid,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react/cjs/react.development';



const App = () => {

  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    }
    else {
      // Alert.alert('Warning', 'it must be longer than 3 characters', [
      //   {
      //     text: 'Later',
      //     onPress: () => console.warn('later pressed'),
      //   },
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.warn('cancel pressed'),
      //   },
      //   {
      //     text: 'Ok',
      //     onPress: () => console.warn('ok pressed'),
      //   },
      // ], {
      //   cancelable: true,
      //   onDismiss: () => console.warn('dismissed'),
      // });

      // ToastAndroid.show(
      //   'it must be longer than 3 characters',
      //   ToastAndroid.LONG
      // );
      ToastAndroid.showWithGravityAndOffset(
        'it must be longer than 3 characters',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        230
      );
    }
  };
  // can have three button ina NativeIntentAndroid, positiv negative, neurtal

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Naam Likh Bai??</Text>
      <TextInput
        style={styles.input}
        placeholder="Naam"
        onChangeText={(text) => setName(text)}
      />
      <Pressable
        onPress={onPressHandler}
      // style={({ pressed }) => [{ backgroundColor: pressed ? '#fff' : '#000' }]}
      // delayLongPress={500}
      // android_ripple={{
      //   color: '#ff0000',
      //   borderless: true,
      // }}
      // hitslop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
});

export default App;
