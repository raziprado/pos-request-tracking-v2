import React, { useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot, Mask } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg2_1 from '../../assets/screens/Screen2_1.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const DESIGN_WIDTH = 375;

const RADIO_1 = { cx: 36, cy: 250.5, r: 6 };
const RADIO_2 = { cx: 36, cy: 399.5, r: 6 };

export function AddressScreen() {
  const nav = useNavigation<Nav>();
  const [selected, setSelected] = useState(0);
  const deviceWidth = Dimensions.get('window').width;
  const scale = deviceWidth / DESIGN_WIDTH;

  const masks: Mask[] = [
    { x: RADIO_1.cx - RADIO_1.r, y: RADIO_1.cy - RADIO_1.r, width: RADIO_1.r * 2, height: RADIO_1.r * 2 },
  ];

  const hotspots: Hotspot[] = [
    { x: 12, y: 52, width: 48, height: 48, onPress: () => nav.goBack() },
    { x: 24, y: 204, width: 300, height: 93, onPress: () => setSelected(0) },
    { x: 24, y: 353, width: 300, height: 93, onPress: () => setSelected(1) },
    { x: 320, y: 225, width: 48, height: 48, onPress: () => nav.navigate('NewAddress_2_5') },
    { x: 320, y: 375, width: 48, height: 48, onPress: () => nav.navigate('NewAddress_2_5') },
    { x: 24, y: 510, width: 250, height: 40, onPress: () => nav.navigate('NewAddress_2_2') },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.navigate('DeliveryDay_3_1') },
  ];

  const activeRadio = selected === 0 ? RADIO_1 : RADIO_2;

  return (
    <ScrollView style={styles.root}>
      <View>
        <SvgScreen Svg={Svg2_1} svgHeight={812} hotspots={hotspots} masks={masks} />
        <View
          style={[
            styles.radio,
            {
              left: (activeRadio.cx - activeRadio.r) * scale,
              top: (activeRadio.cy - activeRadio.r) * scale,
              width: activeRadio.r * 2 * scale,
              height: activeRadio.r * 2 * scale,
              borderRadius: activeRadio.r * scale,
            },
          ]}
          pointerEvents="none"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  radio: {
    position: 'absolute',
    backgroundColor: '#714F8F',
  },
});
