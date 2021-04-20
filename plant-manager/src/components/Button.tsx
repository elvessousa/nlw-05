import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  children?: React.ReactNode;
}

export function Button({ title, children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} {...props}>
      <Text style={styles.buttonText}>
        {title}
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 10,
    minWidth: 56,
    minHeight: 56,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 16,
  },
});
