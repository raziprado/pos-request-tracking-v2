import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlowProvider } from './src/context/FlowContext';
import { ScreenWidthProvider } from './src/context/ScreenWidthContext';
import { PosRequestNavigator } from './src/navigation/PosRequestNavigator';

const PHONE_WIDTH = 375;
const PHONE_HEIGHT = 812;
const BEZEL = 12;

function PhoneFrame({ children }: { children: React.ReactNode }) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.webBackground}>
      <View style={styles.device}>
        <View style={styles.screen}>{children}</View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <PhoneFrame>
      <SafeAreaProvider>
        <ScreenWidthProvider>
          <FlowProvider>
            <NavigationContainer>
              <PosRequestNavigator />
            </NavigationContainer>
          </FlowProvider>
        </ScreenWidthProvider>
      </SafeAreaProvider>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  webBackground: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh' as any,
  },
  device: {
    width: PHONE_WIDTH + BEZEL * 2,
    height: PHONE_HEIGHT + BEZEL * 2,
    backgroundColor: '#111',
    borderRadius: 44,
    borderWidth: 3,
    borderColor: '#333',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
  },
  screen: {
    width: PHONE_WIDTH,
    height: PHONE_HEIGHT,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});
