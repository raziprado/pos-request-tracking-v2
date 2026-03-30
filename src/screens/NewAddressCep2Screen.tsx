import React, { useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg2_3 from '../../assets/screens/Screen2_3.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const SWIPE_THRESHOLD = 50;

export function NewAddressCep2Screen() {
  const nav = useNavigation<Nav>();
  const navigated = useRef(false);

  const goNext = () => {
    if (navigated.current) return;
    navigated.current = true;
    nav.navigate('NewAddress_2_4');
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
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 303, y: 506, width: 48, height: 48, onPress: goNext },
  ];

  return (
    <View style={styles.root} {...panResponder.panHandlers}>
      <SvgScreen Svg={Svg2_3} svgHeight={812} hotspots={hotspots} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});
