import React from 'react';
import { Modal, View, Platform, StyleSheet } from 'react-native';

type Props = {
  visible: boolean;
  children: React.ReactNode;
};

export function InlineModal({ visible, children }: Props) {
  if (!visible) return null;

  if (Platform.OS !== 'web') {
    return (
      <Modal visible transparent animationType="slide">
        {children}
      </Modal>
    );
  }

  return (
    <View style={styles.webOverlay}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  webOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
});
