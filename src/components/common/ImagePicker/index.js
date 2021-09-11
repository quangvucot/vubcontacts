import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './style';
import ImagePickerCropper from 'react-native-image-crop-picker';
const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from Camera',
      icon: (
        <Icon
          type="materialIcon"
          name="camera-alt"
          size={21}
          color={colors.gray}
        />
      ),
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.error(error, error);
          });
      },
    },
    {
      name: 'Choose from Galler',
      icon: (
        <Icon type="materialIcon" name="image" size={21} color={colors.gray} />
      ),
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.error(error, error);
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={150}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => {
          return (
            <TouchableOpacity
              key={name}
              style={styles.pickerOptions}
              onPress={onPress}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
