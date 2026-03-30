import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_8 from '../../assets/screens/Screen6_8.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function EditPayment2Screen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 20, y: 271, width: 32, height: 32, onPress: () => nav.goBack() },
    { x: 94, y: 663, width: 48, height: 48, onPress: () => nav.navigate('EditPayment_6_9') },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.navigate('EditPayment_6_9') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg6_8} svgHeight={812} hotspots={hotspots} />
    </ScrollView>
  );
}
