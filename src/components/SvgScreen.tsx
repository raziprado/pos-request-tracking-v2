import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useScreenWidth } from '../context/ScreenWidthContext';

const DESIGN_WIDTH = 375;

export type Hotspot = {
  x: number;
  y: number;
  width: number;
  height: number;
  onPress: () => void;
};

export type Mask = {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
};

type SvgScreenProps = {
  Svg: React.FC<SvgProps>;
  svgWidth?: number;
  svgHeight: number;
  hotspots?: Hotspot[];
  masks?: Mask[];
};

export function SvgScreen({ Svg, svgWidth = DESIGN_WIDTH, svgHeight, hotspots = [], masks = [] }: SvgScreenProps) {
  const deviceWidth = useScreenWidth();
  const scale = deviceWidth / svgWidth;
  const scaledHeight = svgHeight * scale;

  return (
    <View style={[styles.container, { width: deviceWidth, height: scaledHeight }]}>
      <Svg width={deviceWidth} height={scaledHeight} />
        {masks.map((m, i) => (
          <View
            key={`mask-${i}`}
            style={{
              position: 'absolute',
              left: m.x * scale,
              top: m.y * scale,
              width: m.width * scale,
              height: m.height * scale,
              backgroundColor: m.color ?? '#fff',
            }}
          />
        ))}
        {hotspots.map((h, i) => (
          <Pressable
            key={i}
            onPress={h.onPress}
            style={[
              styles.hotspot,
              {
                left: h.x * scale,
                top: h.y * scale,
                width: h.width * scale,
                height: h.height * scale,
              },
            ]}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  hotspot: {
    position: 'absolute',
  },
});
