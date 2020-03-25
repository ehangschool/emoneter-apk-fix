import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_GREY,
  // COLOR_BASE_PRIMARY_PURPLE,
  // COLOR_BASE_PRIMARY_LIGHT,
  // COLOR_PENGERTIAN,
  COLOR_BASE_PRIMARY_PURPLE
} from '../../../styles';
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
    top: scale(15),
    fontSize: 15,
    textAlign: 'center',
    color: COLOR_WHITE, lineHeight: 15
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_BASE_PRIMARY_PURPLE,
    borderRadius: moderateScale(30),
    borderWidth: 0,
    elevation: 10,
    // height: scale(50),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    height: scale(42),
    marginTop: scale(20),
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
