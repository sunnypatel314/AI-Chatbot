import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TextScreen from "./screens/TextScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const optionsHeader = {
  headerShown: false,
};

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          key="home"
          name="HomeScreen"
          component={HomeScreen}
          options={optionsHeader}
        />
        <Stack.Screen
          key="text"
          name="TextScreen"
          component={TextScreen}
          options={optionsHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
