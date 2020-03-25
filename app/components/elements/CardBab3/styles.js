import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_MERAH
  // COLOR_BASE_PRIMARY_PURPLE,
  // COLOR_BASE_PRIMARY_LIGHT,
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
    fontWeight: '800',
    // left: scale(24),
    top: scale(40),
    fontSize: 20,
    textAlign: 'center',
    color: COLOR_WHITE
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_MERAH,
    borderRadius: moderateScale(30),
    borderWidth: 0,
    elevation: 10,
    // height: scale(50),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    height: scale(124),
    marginTop: scale(20),
    width: scale(254)
  },
  bodyDescText: {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 20,
    top: scale(30),
    textAlign: 'center',
    color: COLOR_WHITE
  },
  imageHeader: {
    alignSelf: 'center',
    height: scale(100),
    top: verticalScale(-5),
    width: scale(100)
  }
});

export default styles;
