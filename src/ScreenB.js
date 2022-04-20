import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScreenB = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate('Screen_A');
        // navigation.goBack();
    };
    return (
        <View style={styles.body}>
            <Text style={styles.text1}>Screen B</Text>
            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : 'green' })}
                onPress={pressHandler}>
                <Text style={styles.text}>Go Back To Screen A</Text>
            </Pressable>
        </View>
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
        fontSize: 35,
    },
}); 

export default ScreenB;