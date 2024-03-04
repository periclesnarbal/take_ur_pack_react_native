import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/old/Header';
import { Counter } from '../../components/old/Counter';

export const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
