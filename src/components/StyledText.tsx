import React, { useCallback } from "react";
import { Text, TextStyle } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const StyledText = ({ title, style }: { title: string; style?: TextStyle }) => {
  const [fontsLoaded, fontError] = useFonts({
    'SFProDisplay-Regular': require('../../assets/fonts/SFProDisplay/SF-Pro-Display-Regular.otf'),
    'SFProDisplay-Bold': require('../../assets/fonts/SFProDisplay/SF-Pro-Display-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Text style={style} onLayout={onLayoutRootView}>{title}</Text>;
};

export default StyledText;
