import { StyleSheet } from 'react-native';
import { COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
    // height: '100%'
    // backgroundColor: COLOR_WHITE
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
    // justifyContent: 'center',
    // alignItems: 'center'
    // marginTop: scale(200)
  },
  logo: { flex: 1, width: scale(230), height: scale(150), marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK },
  appVersion: { fontSize: 14 }
});

export default styles;
