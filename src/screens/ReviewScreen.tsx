import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { useFlow } from '../context/FlowContext';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg6_1 from '../../assets/screens/Screen6_1.svg';
import Svg6_2 from '../../assets/screens/Screen6_2.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function ReviewScreen() {
  const nav = useNavigation<Nav>();
  const { toggleEnabled, setToggleEnabled } = useFlow();

  const goBack = () => nav.goBack();
  const toggleSwitch = () => setToggleEnabled(!toggleEnabled);
  const editAddress = () => nav.navigate('EditAddress_6_3');
  const editDelivery = () => nav.navigate('EditDelivery_6_5');
  const editPayment = () => nav.navigate('EditPayment_6_7');
  const confirm = () => nav.navigate('PinCode_7_1');

  const hotspots6_1: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: goBack },
    { x: 315, y: 245, width: 48, height: 48, onPress: editAddress },
    { x: 315, y: 370, width: 48, height: 48, onPress: editDelivery },
    { x: 315, y: 445, width: 48, height: 48, onPress: editPayment },
    { x: 300, y: 525, width: 56, height: 30, onPress: toggleSwitch },
    { x: 24, y: 714, width: 327, height: 48, onPress: confirm },
  ];

  const hotspots6_2: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: goBack },
    { x: 315, y: 227, width: 48, height: 48, onPress: editAddress },
    { x: 315, y: 353, width: 48, height: 48, onPress: editDelivery },
    { x: 315, y: 428, width: 48, height: 48, onPress: editPayment },
    { x: 305, y: 510, width: 52, height: 36, onPress: toggleSwitch },
    { x: 24, y: 714, width: 327, height: 48, onPress: confirm },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen
        Svg={toggleEnabled ? Svg6_2 : Svg6_1}
        svgHeight={812}
        hotspots={toggleEnabled ? hotspots6_2 : hotspots6_1}
      />
    </ScrollView>
  );
}
