import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_5 from '../../assets/screens/Screen6_5.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function EditDeliveryScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 20, y: 364, width: 32, height: 32, onPress: () => nav.goBack() },
    { x: 192, y: 509, width: 158, height: 106, onPress: () => nav.navigate('EditDelivery_6_6') },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.navigate('EditDelivery_6_6') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg6_5} svgHeight={812} hotspots={hotspots} />
    </ScrollView>
  );
}
