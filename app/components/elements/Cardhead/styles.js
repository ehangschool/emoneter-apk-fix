import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_GREY } from '../../../styles';
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
    // ...FONT_BODY3_PRIMARY,
    fontWeight: 'bold',
    // left: scale(24),
    top: scale(20),
    fontSize: 20,
    textAlign: 'center',
    color: COLOR_GREY
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: moderateScale(30),
    borderWidth: 0,
    elevation: 10,
    // height: scale(50),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    height: scale(62),
    top: scale(130),
    width: scale(280)
  },
  imageHeader: {
    alignSelf: 'center',
    height: scale(100),
    top: verticalScale(-5),
    width: scale(100)
  }
});

export default styles;
