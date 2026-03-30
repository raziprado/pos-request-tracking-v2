import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_7 from '../../assets/screens/Screen6_7.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function EditPaymentScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 20, y: 420, width: 32, height: 32, onPress: () => nav.goBack() },
    { x: 0, y: 676, width: 375, height: 55, onPress: () => nav.navigate('EditPayment_6_8') },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.navigate('EditPayment_6_8') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg6_7} svgHeight={812} hotspots={hotspots} />
    </ScrollView>
  );
}
