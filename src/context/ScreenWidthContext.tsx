import React, { createContext, useContext, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

const ScreenWidthContext = createContext(375);

export const useScreenWidth = () => useContext(ScreenWidthContext);

export function ScreenWidthProvider({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState(375);

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0) setWidth(w);
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <ScreenWidthContext.Provider value={width}>
        {children}
      </ScreenWidthContext.Provider>
    </View>
  );
}
