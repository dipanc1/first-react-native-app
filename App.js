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
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import { useState } from 'react/cjs/react.development';


const App = () => {

  const [first, setfirst] = useState([
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' },
    { name: 'item 6' },
    { name: 'item 7' },
    { name: 'item 8' },
  ]);
  const [Data, setData] = useState(

    [
      {
        title: 'Title 1',
        data: [
          'item 1-1',
          'item 1-2',
        ],
      },
      // {
      //   title: 'Title 2',
      //   data: [
      //     'item 2-4',
      //     'item 2-5',
      //     'item 2-6',
      //   ],
      // },
      // {
      //   title: 'Title 3',
      //   data: [
      //     'item 3-7',
      //     'item 3-8',
      //     'item 3-9',
      //   ],
      // },
    ]
  );

  const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setfirst([...first, { name: 'item ' + (first.length + 1) }]);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 500);
  // };

  const onRefresh = () => {
    setRefreshing(true);
    setData([...Data,
    {
      title: 'Title ' + (Data.length + 1),
      data: [
        'item ' + (Data.length + 1) + '-1',
        'item ' + (Data.length + 1) + '-2',
      ],
    }]);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <SectionList
      style={styles.body}
      sections={Data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item1}>
          <Text style={styles.text}>
            {item}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.item}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff0000', '#00ff00', '#0000ff']}
        />
      }
    />
    // <SectionList
    //   style={styles.body}
    //   sections={DATA}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({ item }) => (
    //     <Text style={styles.text}>
    //       {item}
    //     </Text>
    //   )}
    //   renderSectionHeader={({ section: { title } }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>
    //         {title}
    //       </Text>
    //     </View>
    //   )}
    // />
    // <FlatList
    //   // numColumns={2}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff0000', '#00ff00', '#0000ff']}
    //     />
    //   }
    //   // horizontal
    //   keyExtractor={(item, index) => index.toString()}
    //   // inverted
    //   data={first}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>
    //         {item.name}
    //       </Text>
    //     </View>
    //   )}
    // />
    // <ScrollView
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff0000', '#00ff00', '#0000ff']}
    //     />
    //   }
    //   horizontal={false}
    //   style={styles.body}
    // >
    //   {first.map(object =>
    //     
    //   )}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    // margin: 10,
    backgroundColor: '#00ff2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    // margin: 20,
  },
});

export default App;
