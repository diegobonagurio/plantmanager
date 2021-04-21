import React from 'react';
import { 
  View,
  TouchableOpacity,
  TouchableHighlightProps,
  Text,
  StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// import { Container } from './styles';

interface ButtonProps extends TouchableHighlightProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})