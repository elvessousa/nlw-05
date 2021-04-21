import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...props
}: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[styles.button, active && styles.buttonActive]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.buttonText, active && styles.buttonActiveText]}>
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 5,
    minHeight: 40,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  buttonText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 16,
  },
  buttonActiveText: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});
