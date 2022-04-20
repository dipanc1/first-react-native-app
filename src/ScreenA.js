import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScreenA = ({ navigation }) => {
    const pressHandler = () => {
        // navigation.navigate('Screen_B');
        navigation.replace('Screen_B');
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen A</Text>
            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : 'green' })}
                onPress={pressHandler}>
                <Text style={styles.text}>Go To Screen B</Text>
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
});

export default ScreenA;
