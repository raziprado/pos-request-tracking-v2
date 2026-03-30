import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { useFlow } from '../context/FlowContext';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg4_1 from '../../assets/screens/Screen4_1.svg';
import Svg4_2 from '../../assets/screens/Screen4_2.svg';
import Svg4_3 from '../../assets/screens/Screen4_3.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function QuantityScreen() {
  const nav = useNavigation<Nav>();
  const { quantity, setQuantity } = useFlow();

  const increment = () => { if (quantity < 2) setQuantity(quantity + 1); };
  const decrement = () => { if (quantity > 1) setQuantity(quantity - 1); };
  const goNext = () => nav.navigate('PaymentMethod_5_1');
  const goBack = () => nav.goBack();

  const hotspots1: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: goBack },
    { x: 302, y: 305, width: 48, height: 48, onPress: increment },
    { x: 24, y: 748, width: 327, height: 48, onPress: goNext },
  ];

  const hotspots2: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: goBack },
    { x: 25, y: 304, width: 48, height: 48, onPress: decrement },
    { x: 24, y: 748, width: 327, height: 48, onPress: goNext },
  ];

  const CurrentSvg = quantity === 1 ? Svg4_1 : Svg4_3;
  const currentHotspots = quantity === 1 ? hotspots1 : hotspots2;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={CurrentSvg} svgHeight={812} hotspots={currentHotspots} />
    </ScrollView>
  );
}
