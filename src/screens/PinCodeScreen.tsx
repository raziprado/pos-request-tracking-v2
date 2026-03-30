import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg7_1 from '../../assets/screens/Screen7_1.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function PinCodeScreen() {
  const nav = useNavigation<Nav>();

  const goLoading = () => nav.navigate('Loading');

  const hotspots: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    // Entire keypad area - tap anywhere to simulate PIN entry
    { x: 24, y: 400, width: 327, height: 380, onPress: goLoading },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg7_1} svgHeight={812} hotspots={hotspots} />
    </View>
  );
}
