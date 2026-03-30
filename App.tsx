import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlowProvider } from './src/context/FlowContext';
import { PosRequestNavigator } from './src/navigation/PosRequestNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <FlowProvider>
        <NavigationContainer>
          <PosRequestNavigator />
        </NavigationContainer>
      </FlowProvider>
    </SafeAreaProvider>
  );
}
