import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlowProvider } from './src/context/FlowContext';
import { PosRequestNavigator } from './src/navigation/PosRequestNavigator';

const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 844;
const BEZEL = 16;
const NOTCH_HEIGHT = 44;

function PhoneFrame({ children }: { children: React.ReactNode }) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.webBackground}>
      <View style={styles.device}>
        <View style={styles.notch} />
        <View style={styles.screen}>{children}</View>
        <View style={styles.homeBar}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <PhoneFrame>
      <SafeAreaProvider>
        <FlowProvider>
          <NavigationContainer>
            <PosRequestNavigator />
          </NavigationContainer>
        </FlowProvider>
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
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#333',
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
  },
  notch: {
    width: 130,
    height: 32,
    backgroundColor: '#111',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    marginTop: BEZEL - 3,
  },
  screen: {
    width: PHONE_WIDTH,
    height: PHONE_HEIGHT - NOTCH_HEIGHT - 34,
    backgroundColor: '#fff',
    marginTop: -4,
    overflow: 'hidden',
  },
  homeBar: {
    width: PHONE_WIDTH,
    height: 34,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
  },
});
