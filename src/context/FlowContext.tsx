import React, { createContext, useContext, useState } from 'react';

type FlowState = {
  toggleEnabled: boolean;
  setToggleEnabled: (v: boolean) => void;
  quantity: number;
  setQuantity: (v: number) => void;
  selectedAddress: number;
  setSelectedAddress: (v: number) => void;
};

const FlowContext = createContext<FlowState>({
  toggleEnabled: false,
  setToggleEnabled: () => {},
  quantity: 1,
  setQuantity: () => {},
  selectedAddress: 0,
  setSelectedAddress: () => {},
});

export function FlowProvider({ children }: { children: React.ReactNode }) {
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(0);

  return (
    <FlowContext.Provider value={{ toggleEnabled, setToggleEnabled, quantity, setQuantity, selectedAddress, setSelectedAddress }}>
      {children}
    </FlowContext.Provider>
  );
}

export function useFlow() {
  return useContext(FlowContext);
}
