import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_4 from '../../assets/screens/Screen6_4.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function EditAddress2Screen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 16, y: 26, width: 44, height: 36, onPress: () => nav.pop(2) },
    { x: 24, y: 532, width: 327, height: 48, onPress: () => nav.pop(2) },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg6_4} svgHeight={852} hotspots={hotspots} />
    </ScrollView>
  );
}
