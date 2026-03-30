import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg2_6 from '../../assets/screens/Screen2_6.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function AddressConfirmScreen() {
  const nav = useNavigation<Nav>();

  const hotspots: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 320, y: 225, width: 48, height: 48, onPress: () => nav.navigate('NewAddress_2_5') },
    { x: 320, y: 375, width: 48, height: 48, onPress: () => nav.navigate('NewAddress_2_5') },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.navigate('DeliveryDay_3_1') },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={Svg2_6} svgHeight={812} hotspots={hotspots} />
    </ScrollView>
  );
}
