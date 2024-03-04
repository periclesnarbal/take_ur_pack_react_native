import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const App = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>New fresh app!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
    },
});