import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import CameraScreen from "../screens/camera";

type StackNavigation = {
  Home: undefined;
  Camera: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reconhecimento de pacote" component={Home} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
