const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

const nudsLibraryRoot = path.resolve(__dirname, '../nuds-library');

config.watchFolders = [nudsLibraryRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
];

config.resolver.blockList = [
  new RegExp(path.resolve(nudsLibraryRoot, 'node_modules').replace(/[/\\]/g, '[/\\\\]') + '/.*'),
];

config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  'react-native-svg': path.resolve(__dirname, 'node_modules/react-native-svg'),
  'react-native-reanimated': path.resolve(__dirname, 'node_modules/react-native-reanimated'),
  'react-native-safe-area-context': path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
  'expo-font': path.resolve(__dirname, 'node_modules/expo-font'),
  'expo-haptics': path.resolve(__dirname, 'node_modules/expo-haptics'),
};

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

module.exports = config;
