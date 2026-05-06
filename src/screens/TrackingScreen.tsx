import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { useFlow } from '../context/FlowContext';

const ADDRESSES = [
  { rua: 'Rua Felipe Cavalcanti', numero: '74', bairro: 'Jardim das Bandeiras, São Paulo, SP' },
  { rua: 'Av. Rebouças', numero: '1585', bairro: 'Pinheiros, São Paulo, SP' },
];

function buildTrackingUrl(addressIndex: number): string {
  const addr = ADDRESSES[addressIndex] ?? ADDRESSES[0];
  const params = new URLSearchParams({
    rua: addr.rua,
    numero: addr.numero,
    bairro: addr.bairro,
  });
  const base = Platform.OS === 'web' ? '/tracking/index.html' : 'file:///android_asset/tracking/index.html';
  return `${base}?${params.toString()}`;
}

export function TrackingScreen() {
  const { selectedAddress } = useFlow();
  const url = buildTrackingUrl(selectedAddress);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe
          src={url}
          style={{ width: '100%', height: '100%', border: 'none' } as any}
          title="Tracking"
        />
      </View>
    );
  }

  const WebView = require('react-native-webview').WebView;
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  webview: {
    flex: 1,
  },
});
