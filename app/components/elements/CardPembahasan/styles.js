import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_GREY, COLOR_JINGGA, COLOR_PEMBAHASAN } from '../../../styles';
import { verticalScale, scale, moderateScale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    width: '100%'
  },
  bodyContainer: {
    top: scale(30)
  },
  bodyTitleText: {
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    left: scale(15),
    top: scale(10),
    fontSize: 20,
    color: COLOR_WHITE
  },
  bodyBodyText: {
    fontFamily: 'Nunito Sans',
    marginTop: 10,
    marginLeft: scale(15),
    fontSize: 15,
    color: COLOR_WHITE
  },
  container: {
    alignSelf: 'center',
    backgroundColor: COLOR_PEMBAHASAN,
    paddingBottom: scale(10),
    elevation: 10,
    height: scale(250),
    shadowColor: COLOR_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    top: scale(30),
    width: scale(288)
  },
  imageHeader: {
    alignSelf: 'center',
    height: scale(100),
    top: verticalScale(-5),
    width: scale(100)
  }
});

export default styles;
