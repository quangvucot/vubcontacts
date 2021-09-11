import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
const Input = ({
  onChangeText,
  placehoder,
  iconPosition,
  icon,
  style,
  value,
  lable,
  error,
  secureTextEntry,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return colors.blue;
    }
    if (error) {
      return colors.red;
    } else {
      return colors.gray;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {lable && <Text>{lable}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? 'center' : 'baseline',
          },
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placehoder}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
