import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },

  modalView: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
    minHeight: 300,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
  },
  body: {minHeight: 300, paddingHorizontal: 10, paddingVertical: 10},

  footerSeparate: {
    height: 1,
    backgroundColor: colors.gray,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  termsView: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: colors.gray,
  },
});
