/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import FileOpenerDemo from './src/screens/FileOpenerDemo';
import LunarDatePickerDemo from './src/screens/LunarDatePickerDemo';
import ProgressModalDemo from './src/screens/ProgressModalDemo';

// Import types
import type { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'DatacomVN Libraries Demo',
              headerStyle: {
                backgroundColor: '#2196F3',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="FileOpenerDemo"
            component={FileOpenerDemo}
            options={{
              title: 'File Opener Demo',
              headerStyle: {
                backgroundColor: '#2196F3',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="LunarDatePickerDemo"
            component={LunarDatePickerDemo}
            options={{
              title: 'Lunar Date Picker Demo',
              headerStyle: {
                backgroundColor: '#2196F3',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="ProgressModalDemo"
            component={ProgressModalDemo}
            options={{
              title: 'Progress & Modal Demo',
              headerStyle: {
                backgroundColor: '#2196F3',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
