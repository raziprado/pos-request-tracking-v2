import React, { useState, useRef } from 'react';
import { ScrollView, View, Modal, Pressable, PanResponder, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';
import { useScreenWidth } from '../context/ScreenWidthContext';

import Svg5_1 from '../../assets/screens/Screen5_1.svg';
import Svg5_2 from '../../assets/screens/Screen5_2.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const W = 375;
const SWIPE_THRESHOLD = 50;

export function PaymentMethodScreen() {
  const nav = useNavigation<Nav>();
  const [sheetVisible, setSheetVisible] = useState(false);
  const navigated = useRef(false);
  const deviceWidth = useScreenWidth();
  const scale = deviceWidth / W;

  const goNext = () => {
    if (navigated.current) return;
    navigated.current = true;
    nav.navigate('Review_6');
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gs) =>
        Math.abs(gs.dx) > 10 && Math.abs(gs.dx) > Math.abs(gs.dy),
      onPanResponderRelease: (_, gs) => {
        if (gs.dx < -SWIPE_THRESHOLD) goNext();
      },
    }),
  ).current;

  const hotspots: Hotspot[] = [
    { x: 0, y: 100, width: 375, height: 450, onPress: goNext },
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 24, y: 560, width: 200, height: 40, onPress: () => setSheetVisible(true) },
  ];

  const sheetHotspots: Hotspot[] = [
    { x: 300, y: 10, width: 60, height: 40, onPress: () => setSheetVisible(false) },
  ];

  return (
    <View style={styles.root} {...panResponder.panHandlers}>
      <ScrollView style={{ flex: 1 }}>
        <SvgScreen Svg={Svg5_1} svgHeight={812} hotspots={hotspots} />
      </ScrollView>

      <Modal visible={sheetVisible} transparent animationType="slide">
        <Pressable style={styles.overlay} onPress={() => setSheetVisible(false)}>
          <View style={styles.sheetContainer}>
            <SvgScreen Svg={Svg5_2} svgWidth={375} svgHeight={545} hotspots={sheetHotspots} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
});
