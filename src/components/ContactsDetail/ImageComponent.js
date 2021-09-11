import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loading}>Loading Image</Text>}
      <View>
        <Image
          style={styles.detailPhoto}
          onLoadEnd={onLoadEnd}
          onError={onError}
          onLoadStart={onLoadStart}
          source={{uri: src}}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
