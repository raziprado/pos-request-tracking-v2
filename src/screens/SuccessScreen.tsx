import React, { useState } from 'react';
import { ScrollView, View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen, Hotspot, Mask } from '../components/SvgScreen';
import { InlineModal } from '../components/InlineModal';
import { RootStackParamList } from '../navigation/PosRequestNavigator';
import { useScreenWidth } from '../context/ScreenWidthContext';

import Svg7_5 from '../../assets/screens/Screen7_5.svg';
import Svg7_6 from '../../assets/screens/Screen7_6.svg';

const whatsappIcon = require('../../assets/share-icons/whatsapp.png');
const gmailIcon = require('../../assets/share-icons/gmail.png');
const instagramIcon = require('../../assets/share-icons/instagram.png');
const messengerIcon = require('../../assets/share-icons/messenger.png');

type Nav = NativeStackNavigationProp<RootStackParamList>;

const SVG_SHARE_W = 395;
const SVG_SHARE_H = 287;
const DESIGN_WIDTH = 375;

const ICONS = [
  { src: whatsappIcon, card: { x: 37, y: 103, w: 60, h: 60 }, img: { x: 1, y: 77, w: 132, h: 111 } },
  { src: gmailIcon, card: { x: 125, y: 103, w: 60, h: 60 }, img: { x: 134, y: 112, w: 42, h: 42 } },
  { src: instagramIcon, card: { x: 213, y: 103, w: 60, h: 60 }, img: { x: 211, y: 101, w: 64, h: 64 } },
  { src: messengerIcon, card: { x: 301, y: 103, w: 60, h: 60 }, img: { x: 301, y: 103, w: 60, h: 60 } },
];

export function SuccessScreen() {
  const nav = useNavigation<Nav>();
  const [shareVisible, setShareVisible] = useState(false);
  const deviceWidth = useScreenWidth();
  const shareScale = deviceWidth / SVG_SHARE_W;

  const hotspots: Hotspot[] = [
    { x: 296, y: 530, width: 36, height: 36, onPress: () => setShareVisible(true) },
    { x: 24, y: 748, width: 327, height: 48, onPress: () => nav.popToTop() },
  ];

  const shareMasks: Mask[] = ICONS.map((ic) => ({
    x: ic.card.x, y: ic.card.y, width: ic.card.w, height: ic.card.h, color: '#fff',
  }));

  const shareHotspots: Hotspot[] = [
    { x: 325, y: 28, width: 36, height: 36, onPress: () => setShareVisible(false) },
    { x: 37, y: 103, width: 60, height: 70, onPress: () => setShareVisible(false) },
    { x: 125, y: 103, width: 60, height: 70, onPress: () => setShareVisible(false) },
    { x: 213, y: 103, width: 60, height: 70, onPress: () => setShareVisible(false) },
    { x: 301, y: 103, width: 60, height: 70, onPress: () => setShareVisible(false) },
    { x: 21, y: 209, width: 353, height: 60, onPress: () => setShareVisible(false) },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1 }}>
        <SvgScreen Svg={Svg7_5} svgHeight={812} hotspots={hotspots} />
      </ScrollView>

      <InlineModal visible={shareVisible}>
        <Pressable style={styles.overlay} onPress={() => setShareVisible(false)}>
          <View style={styles.sheetContainer}>
            <View style={{ position: 'relative' }}>
              <SvgScreen
                Svg={Svg7_6}
                svgWidth={SVG_SHARE_W}
                svgHeight={SVG_SHARE_H}
                hotspots={shareHotspots}
                masks={shareMasks}
              />
              {ICONS.map((ic, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    left: ic.card.x * shareScale,
                    top: ic.card.y * shareScale,
                    width: ic.card.w * shareScale,
                    height: ic.card.h * shareScale,
                    borderRadius: 13 * shareScale,
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                  }}
                >
                  <Image
                    source={ic.src}
                    style={{
                      position: 'absolute',
                      left: (ic.img.x - ic.card.x) * shareScale,
                      top: (ic.img.y - ic.card.y) * shareScale,
                      width: ic.img.w * shareScale,
                      height: ic.img.h * shareScale,
                    }}
                    resizeMode="cover"
                  />
                </View>
              ))}
            </View>
          </View>
        </Pressable>
      </InlineModal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
});
