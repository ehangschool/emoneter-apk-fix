import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  Judul: {
    fontSize: 30,
    // fontWeight: "bold",
    color: COLOR_WHITE,
    top: scale(35),
    left: scale(8),
    position: 'absolute',
    fontStyle: 'normal',
    fontFamily: 'Playfair Display'
    // ...FONT_HEADLINE2_PRIMARY
  },
  Juduldec: {
    fontSize: 15,
    // fontWeight: "bold",
    color: COLOR_WHITE,
    top: scale(75),
    left: scale(15),
    position: 'absolute'
    // ...FONT_HEADLINE2_PRIMARY
  },
  logoContainer: { width: scale(100), height: scale(100), alignSelf: 'center', marginTop: scale(200) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK },
  button: {
    alignItems: 'flex-start',
    marginTop: scale(40),
    left: scale(35)
  },
  appVersion: { fontSize: 14 }
});

export default styles;
