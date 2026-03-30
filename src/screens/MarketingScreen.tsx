import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';
import { useScreenWidth } from '../context/ScreenWidthContext';

import Svg1_1 from '../../assets/screens/Screen1_1.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const DESIGN_WIDTH = 375;
const CLIP_HEIGHT = 250;
const IMG_RECT_X = -27.07;
const IMG_RECT_Y = -132;
const IMG_RECT_W = 430;
const IMG_RECT_H = 514.897;

export function MarketingScreen() {
  const nav = useNavigation<Nav>();
  const deviceWidth = useScreenWidth();
  const scale = deviceWidth / DESIGN_WIDTH;

  const goAddress = () => nav.navigate('Address_2_1');
  const goScroll = () => nav.navigate('Marketing_1_2');

  const hotspots: Hotspot[] = [
    { x: 24, y: 628, width: 327, height: 48, onPress: goAddress },
    { x: 100, y: 695, width: 175, height: 30, onPress: goScroll },
    { x: 160, y: 740, width: 55, height: 50, onPress: goScroll },
  ];

  return (
    <View style={styles.root}>
      <SvgScreen Svg={Svg1_1} svgHeight={812} hotspots={hotspots} />
      <View
        style={[
          styles.imageClip,
          { width: deviceWidth, height: CLIP_HEIGHT * scale },
        ]}
        pointerEvents="none"
      >
        <Image
          source={require('../../assets/screens/hero_image.png')}
          style={{
            position: 'absolute',
            left: IMG_RECT_X * scale,
            top: IMG_RECT_Y * scale,
            width: IMG_RECT_W * scale,
            height: IMG_RECT_H * scale,
          }}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageClip: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
});
