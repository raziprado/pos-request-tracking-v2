import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg3_1 from '../../assets/screens/Screen3_1.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function DeliveryDayScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 24, y: 260, width: 160, height: 120, onPress: () => nav.navigate('DeliveryDay_3_2') },
    { x: 192, y: 260, width: 160, height: 120, onPress: () => nav.navigate('DeliveryDay_3_2') },
    { x: 24, y: 388, width: 160, height: 120, onPress: () => nav.navigate('DeliveryDay_3_2') },
    { x: 192, y: 388, width: 160, height: 120, onPress: () => nav.navigate('DeliveryDay_3_2') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg3_1} svgHeight={814} hotspots={hotspots} />
    </ScrollView>
  );
}
