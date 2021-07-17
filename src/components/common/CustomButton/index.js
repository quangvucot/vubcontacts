import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'
const CustomButton = ({ onPress, title, danger, secondary, primary, disabled, loading, ...props }) => {

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return "row";
            } else {
                return "row-reverse";
            }
        }
    }
    const getBGColor = () => {
        if (disabled) {
            return colors.gray;
        }
        if (primary) {
            return colors.blue;
        }
        if (danger) {
            return colors.red;
        }
        if (secondary) {
            return colors.secondary;
        }
    }
    return (
        <TouchableOpacity disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, { backgroundColor: getBGColor() }]} >
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={colors.red} />}
                {title && <Text style={{ color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0 }}>{title}</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;

