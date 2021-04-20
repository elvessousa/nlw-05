import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          {'Gerencie \n suas plantas de \n forma fácil'}
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <Button onPress={handleStart}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  heading: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 38,
    marginTop: 30,
    textAlign: 'center',
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 24,
  },
});
