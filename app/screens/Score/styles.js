import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_FONT_PURPLE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: COLOR_BASE_PRIMARY_PURPLE
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
    // logoContainer: { width: scale(100), height: scale(100), alignSelf: 'center', marginTop: scale(200) },
    logo: {
        width: 120,
        height: 200,
        alignSelf: 'center',
        padding: scale(10)
    },
    appTitle: { fontSize: 18, color: COLOR_BLACK },
    button: {
        alignItems: 'flex-start',
        marginTop: scale(40),
        left: scale(35)
    },
    textscore: {
        marginTop: scale(-10)
    },
    gambar: {
        marginTop: scale(30)

    },
    Kuis: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        marginTop: scale(30),
        textAlign: 'center'
        // padding: scale(15)
    },
    hsl: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        // marginTop: scale(20),
        textAlign: 'center'

    },
    Score_desc: {
        textAlign: 'center',
        color: COLOR_FONT_PURPLE,
        fontSize: 28,
        marginTop: scale(5)
    },
    button: {
        alignItems: 'center',
        marginTop: scale(45)

    },
    appVersion: { fontSize: 14 }
});

export default styles;
