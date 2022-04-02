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
  // Linking,
} from 'react-native';
import { useState } from 'react/cjs/react.development';


const App = () => {
  // const [name, setName] = useState('Jatt');
  // const [session, setSession] = useState({ number: 6, title: 'state' });
  // const [current, setCurrent] = useState(false);
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    // setName('Jatt Di Mashook');
    // setSession({ number: 700, title: 'state changed' });
    // setCurrent(!current);
    setAdd(add + 5);
    setCount(count + 1);
  };

  return (
    <View style={styles.body}>
      {/* <Text style={styles.text}>
        {name} di Application
      </Text>
      <Text style={styles.text}>
        Session Number: {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'True' : 'False'}
      </Text> */}
      <View style={styles.view1}>
        <Text style={styles.text}>
          Jatt di Mashook
        </Text>
      </View>
      {/* <Button title="jatt" onPress={()=>{Linking.openURL('https://dipan-portfolio.netlify.app');}}>Jatt</Button> */}
      {/* <Button title="update state" onPress={onClickHandler}>Jatt</Button> */}
      {/* <Button color="#f00" title="add" onPress={onClickHandler}>Jatt</Button>
      <Text style={styles.text}>
        you clicked {count} times
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#38ba68',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 10,
    // borderColor: '#f00',
    // borderRadius: 10,
    // margin: 10,
  },
  view1: {
    width: 200,
    height: 100,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
    // textTransform: 'uppercase',
  },
  // button: {
  //   backgroundColor: '#f00',
  //   fontSize: 20,
  //   fontStyle: 'italic',
  //   margin: 20,
  //   textTransform: 'uppercase',
  //   width: 100,
  // },
});

export default App;
