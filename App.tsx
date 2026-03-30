import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlowProvider } from './src/context/FlowContext';
import { ScreenWidthProvider } from './src/context/ScreenWidthContext';
import { PosRequestNavigator } from './src/navigation/PosRequestNavigator';

const SCREEN_W = 393;
const SCREEN_H = 852;
const BEZEL = 10;
const DEVICE_RADIUS = 55;

function PhoneFrame({ children }: { children: React.ReactNode }) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.webBackground}>
      <View style={styles.deviceOuter}>
        {/* Power button */}
        <View style={styles.powerBtn} />
        {/* Volume buttons */}
        <View style={styles.volUp} />
        <View style={styles.volDown} />
        {/* Silent switch */}
        <View style={styles.silentSwitch} />

        <View style={styles.device}>
          <View style={styles.screen}>
            {/* Dynamic Island */}
            <View style={styles.dynamicIsland} />
            <View style={styles.screenContent}>{children}</View>
          </View>
        </View>
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
  deviceOuter: {
    position: 'relative' as any,
  },
  device: {
    width: SCREEN_W + BEZEL * 2,
    height: SCREEN_H + BEZEL * 2,
    backgroundColor: '#1c1c1e',
    borderRadius: DEVICE_RADIUS,
    borderWidth: 2,
    borderColor: '#3a3a3c',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.6,
    shadowRadius: 30,
  },
  screen: {
    width: SCREEN_W,
    height: SCREEN_H,
    backgroundColor: '#000',
    borderRadius: DEVICE_RADIUS - BEZEL,
    overflow: 'hidden',
  },
  dynamicIsland: {
    position: 'absolute',
    top: 11,
    alignSelf: 'center',
    width: 126,
    height: 37,
    backgroundColor: '#000',
    borderRadius: 20,
    zIndex: 100,
  },
  screenContent: {
    flex: 1,
    overflow: 'hidden',
  },
  powerBtn: {
    position: 'absolute',
    right: -4,
    top: 185,
    width: 4,
    height: 100,
    backgroundColor: '#3a3a3c',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  silentSwitch: {
    position: 'absolute',
    left: -4,
    top: 155,
    width: 4,
    height: 33,
    backgroundColor: '#3a3a3c',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  volUp: {
    position: 'absolute',
    left: -4,
    top: 210,
    width: 4,
    height: 60,
    backgroundColor: '#3a3a3c',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  volDown: {
    position: 'absolute',
    left: -4,
    top: 280,
    width: 4,
    height: 60,
    backgroundColor: '#3a3a3c',
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
