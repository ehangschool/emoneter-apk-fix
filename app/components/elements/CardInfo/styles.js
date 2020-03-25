/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {
  // COLOR_BASE_PRIMARY_MAIN,
  COLOR_WHITE,
  COLOR_BASE_TERTIARY_MAIN,
  // FONT_LABEL1_PRIMARY,
  FONT_HEADLINE2_PRIMARY,
  // FONT_BODY3_PRIMARY,
  // COLOR_BLACK,
  COLOR_BASE_PRIMARY_PURPLE
} from '../../../styles';
import { verticalScale, scale, moderateScale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    paddingLeft: scale(25),
    width: '90%'
  },
  bodyBodyText: {
    // ...FONT_HEADLINE2_PRIMARY,
    fontFamily: 'Nunito Sans',
    marginTop: 10,
    marginLeft: 60,
    fontSize: 18,
    color: COLOR_BASE_PRIMARY_PURPLE
  },
  bodyContainer: {
    top: verticalScale(-10)
  },
  bodyTitleText: {
    // ...FONT_BODY3_PRIMARY,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
    marginTop: verticalScale(15),
    marginLeft: scale(53),
    color: COLOR_BASE_PRIMARY_PURPLE
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: moderateScale(15),
    height: verticalScale(130),
    width: '90%'
  },
  headerContainer: {
    alignItems: 'center',
    borderColor: COLOR_BASE_TERTIARY_MAIN,
    flexDirection: 'row',
    height: verticalScale(45),
    marginLeft: scale(20)
  },
  textHeader: {
    // ...FONT_LABEL1_PRIMARY,
    color: COLOR_BASE_PRIMARY_PURPLE,
    fontSize: 18,
    marginLeft: scale(56),
    marginTop: 15
  },
  top: {
    backgroundColor: COLOR_WHITE,
    // borderTopLeftRadius: moderateScale(5),
    // borderTopRightRadius: moderateScale(5),
    // height: verticalScale(5),
    width: '100%'
  }
});

export default styles;
