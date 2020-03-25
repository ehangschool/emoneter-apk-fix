import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  // FONT_BODY3_PRIMARY,
  COLOR_GREY,
  COLOR_BASE_PRIMARY_PURPLE,
  COLOR_BLUE_OPACITY
  // COLOR_GREEN,
  // COLOR_VIOLET_LINIER
} from '../../../styles';
import { verticalScale, scale, moderateScale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    width: '100%',
    color: COLOR_WHITE
  },
  bodyContainer: {
    top: verticalScale(30),
    color: COLOR_BLUE_OPACITY
  },
  bodyDescText: {
    // ...FONT_BODY3_PRIMARY,
    alignSelf: 'flex-start',
    marginLeft: scale(20),
    marginRight: scale(20),
    marginTop: scale(10),
    fontSize: 16,
    color: COLOR_BASE_PRIMARY_PURPLE
  },
  bodyTitleText: {
    // ...FONT_BODY3_PRIMARY,
    // alignSelf: 'flex-start',
    marginTop: scale(50),
    // marginLeft: scale(20),
    // marginRight: scale(40),
    fontSize: 22,
    textAlign: 'center',
    color: COLOR_BASE_PRIMARY_PURPLE
  },
  button: {
    alignSelf: 'center',
    // backgroundColor: COLOR_GREEN,
    borderRadius: scale(20),
    height: scale(42),
    marginTop: scale(70),
    width: scale(150)
  },
  card: {
    alignSelf: 'center',
    borderRadius: moderateScale(22),
    height: scale(480),
    width: scale(290),
    color: COLOR_WHITE
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: moderateScale(20),
    elevation: 2,
    height: verticalScale(700),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    width: scale(290)
  },
  text: {
    fontFamily: 'Playfair Display',
    color: COLOR_BASE_PRIMARY_PURPLE,
    alignSelf: 'center',
    fontSize: 14,
    marginTop: scale(10)
  }
});

export default styles;
