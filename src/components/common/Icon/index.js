import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDegign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const getIconFont = type => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'feather':
      return Feather;
    case 'antDegign':
      return AntDegign;
    case 'simpleLineIcon':
      return SimpleLineIcon;
    case 'faicon':
      return FAIcon;
    case 'faicon5':
      return FAIcon5;
    case 'entypoIcon':
      return EntypoIcon;
    case 'evilIcon':
      return EvilIcon;
    case 'foundationIcon':
      return FoundationIcon;
    case 'ioniconIcon':
      return IoniconIcon;
    case 'materialcommunityicon':
      return MaterialCommunityIcon;
    case 'materialIcon':
      return MaterialIcon;
    case 'octiconIcon':
      return OcticonIcon;
    case 'zocialIcon':
      return ZocialIcon;
    default:
      return FAIcon;
  }
};
const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type);
  return <FontIcon {...props} />;
};
export default Icon;
