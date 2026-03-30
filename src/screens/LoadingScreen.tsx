import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SvgScreen } from '../components/SvgScreen';
import { RootStackParamList } from '../navigation/PosRequestNavigator';

import Svg7_2 from '../../assets/screens/Screen7_2.svg';
import Svg7_3 from '../../assets/screens/Screen7_3.svg';
import Svg7_4 from '../../assets/screens/Screen7_4.svg';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function LoadingScreen() {
  const nav = useNavigation<Nav>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(() => nav.replace('Success_7_5'), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [nav]);

  const svgs = [Svg7_2, Svg7_3, Svg7_4];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SvgScreen Svg={svgs[step]} svgHeight={812} />
    </View>
  );
}
