import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_GREY, COLOR_BASE_PRIMARY_PURPLE } from '../../../styles';
import { verticalScale, scale, moderateScale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    width: '100%'
  },
  bodyContainer: {
    top: verticalScale(30)
  },
  bodyTitleText: {
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    // left: scale(24),
    top: scale(100),
    fontSize: 20,
    textAlign: 'center',
    color: COLOR_BASE_PRIMARY_PURPLE
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: moderateScale(10),
    elevation: 50,
    height: scale(150),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 6,
    width: scale(120)
  },
  imageHeader: {
    alignSelf: 'center',
    height: scale(60),
    top: verticalScale(-5),
    width: scale(100)
  }
});

export default styles;
