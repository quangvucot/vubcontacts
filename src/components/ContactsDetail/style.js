import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailPhoto: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  loading: {paddingLeft: '30%', paddingTop: '5%'},
  imageContainer: {
    height: 300,
    width: '100%',
  },
  name: {
    fontSize: 23,
  },
  content: {
    paddingLeft: 20,
  },
  hrLine: {
    backgroundColor: colors.gray,
    height: 0.5,
    borderRadius: 5,
  },
  topCallOption: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {color: colors.primary, alignItems: 'center'},
  textTopOption: {
    color: colors.primary,
    paddingVertical: 2,
    fontSize: 14,
    paddingLeft: 5,
  },
  bottomOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCall: {
    paddingHorizontal: 10,
  },
  iconCallBottom: {
    color: colors.primary,
  },
});
