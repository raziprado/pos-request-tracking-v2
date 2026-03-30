import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg3_3 from '../../assets/screens/Screen3_3.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function DeliveryTimeScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 24, y: 750, width: 327, height: 48, onPress: () => nav.navigate('Quantity_4_1') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg3_3} svgHeight={814} hotspots={hotspots} />
    </ScrollView>
  );
}
