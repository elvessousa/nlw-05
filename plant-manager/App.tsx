import React from 'react';
import {
  Jost_400Regular,
  Jost_700Bold,
  useFonts,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_700Bold,
    Jost_400Regular,
  });

  return !fontsLoaded ? <AppLoading /> : <Routes />;
}
