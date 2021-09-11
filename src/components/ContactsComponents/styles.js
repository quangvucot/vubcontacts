import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    color: colors.gray,
    fontSize: 14,
  },
  floatingActionButton: {
    backgroundColor: 'red',
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
