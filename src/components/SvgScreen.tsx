import React, { useState } from 'react';
import { View, Pressable, Dimensions, Platform, LayoutChangeEvent, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

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
  const fallbackWidth = Platform.OS === 'web' ? DESIGN_WIDTH : Dimensions.get('window').width;
  const [containerWidth, setContainerWidth] = useState(fallbackWidth);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0) setContainerWidth(w);
  };

  const scale = containerWidth / svgWidth;
  const scaledHeight = svgHeight * scale;

  return (
    <View style={{ width: '100%' }} onLayout={onLayout}>
      <View style={[styles.container, { width: containerWidth, height: scaledHeight }]}>
        <Svg width={containerWidth} height={scaledHeight} />
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
