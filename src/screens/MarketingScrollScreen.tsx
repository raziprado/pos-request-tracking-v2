import React from 'react';
import { ScrollView, View, Image, Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot, Mask } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg1_3 from '../../assets/screens/Screen1_3.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const DESIGN_WIDTH = 375;

const HIPERCARD = { x: 182.225, y: 1292.52, w: 57.96, h: 57.96 };
const AMEX = { x: 267.066, y: 1308, w: 27, h: 27 };
const PAD = 8;

export function MarketingScrollScreen() {
  const nav = useNavigation<Nav>();
  const deviceWidth = Dimensions.get('window').width;
  const scale = deviceWidth / DESIGN_WIDTH;

  const goAddress = () => nav.navigate('Address_2_1');
  const goBack = () => nav.goBack();

  const masks: Mask[] = [
    { x: 24, y: 1390, width: 327, height: 48 },
    { x: HIPERCARD.x - PAD, y: HIPERCARD.y - PAD, width: HIPERCARD.w + PAD * 2, height: HIPERCARD.h + PAD * 2 },
    { x: AMEX.x - PAD, y: AMEX.y - PAD, width: AMEX.w + PAD * 2, height: AMEX.h + PAD * 2 },
  ];

  const hotspots: Hotspot[] = [
    { x: 24, y: 60, width: 32, height: 32, onPress: goBack },
  ];

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll}>
        <View>
          <SvgScreen Svg={Svg1_3} svgHeight={1470} hotspots={hotspots} masks={masks} />
          <Image
            source={require('../../assets/screens/logo_hipercard.png')}
            style={{
              position: 'absolute',
              left: HIPERCARD.x * scale,
              top: HIPERCARD.y * scale,
              width: HIPERCARD.w * scale,
              height: HIPERCARD.h * scale,
            }}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/screens/logo_amex.png')}
            style={{
              position: 'absolute',
              left: AMEX.x * scale,
              top: AMEX.y * scale,
              width: AMEX.w * scale,
              height: AMEX.h * scale,
            }}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingHorizontal: 24 * scale }]}>
        <Pressable
          style={[styles.button, { height: 48 * scale, borderRadius: 24 * scale }]}
          onPress={goAddress}
        >
          <Text style={[styles.buttonText, { fontSize: 16 * scale }]}>Pedir roxinha</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  bottomBar: {
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingBottom: 24,
  },
  button: {
    backgroundColor: '#714F8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
