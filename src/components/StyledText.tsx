import React from "react";
import { Text, TextStyle } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const StyledText = ({ title, style }: { title: string; style?: TextStyle }) => {
  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('../../assets/fonts/SFProDisplay/SF-Pro-Display-Regular.otf'),
  });
    
  if (!fontsLoaded) return <AppLoading />;

  return <Text style={style}>{title}</Text>;
};

export default StyledText;
