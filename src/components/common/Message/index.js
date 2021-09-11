import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
const Message = ({
  message,
  retry,
  retryFn,
  danger,
  secondary,
  info,
  primary,
  success,
  onDismiss,
}) => {
  const [useDimissed, setDismissed] = useState(false);
  const getBGColor = () => {
    if (primary) {
      return colors.blue;
    }
    if (danger) {
      return colors.red;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {useDimissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBGColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
