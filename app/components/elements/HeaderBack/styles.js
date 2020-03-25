import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_BASE_PRIMARY_PURPLE } from '../../../styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR_BASE_PRIMARY_PURPLE,
    height: Platform.OS === 'ios' ? 100 : 150
  },
  centerContainer: {
    flex: 1
    // justifyContent: 'center'
  },
  icon: {
    height: scale(70),
    marginHorizontal: scale(60),
    // justifyContent: 'center',
    marginTop: scale(40),
    width: scale(185)
  },
  leftRightContainer: {
    bottom: scale(60),
    left: scale(10),
    marginTop: scale(40)
  },
  header: {
    ...FONT_HEADLINE6_PRIMARY,
    alignSelf: 'center',
    color: COLOR_WHITE
  },
  textHeader: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE,
    fontWeight: 'bold',
    marginLeft: scale(32),
    marginTop: scale(56)
  }
});
