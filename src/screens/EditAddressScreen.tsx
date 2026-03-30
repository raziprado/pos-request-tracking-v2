import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_3 from '../../assets/screens/Screen6_3.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function EditAddressScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 16, y: 178, width: 44, height: 36, onPress: () => nav.goBack() },
    { x: 24, y: 390, width: 327, height: 92, onPress: () => nav.navigate('EditAddress_6_4') },
    { x: 24, y: 684, width: 327, height: 48, onPress: () => nav.navigate('EditAddress_6_4') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg6_3} svgHeight={812} hotspots={hotspots} />
    </ScrollView>
  );
}
