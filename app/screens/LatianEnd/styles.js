import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BLUE_OPACITY, COLOR_FONT_PURPLE, COLOR_GREY, COLOR_JINGGA } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_WHITE
    },
    buttonLogin: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: scale(10)
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
    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        marginBottom: METRICS.baseMargin,
        marginLeft: scale(15),
        marginRight: scale(10)
    },
    halsoal: {
        marginTop: scale(10)
    },
    appTitle: { fontSize: 18, color: COLOR_BLACK },
    button: {
        alignItems: 'center',
        marginTop: scale(20),
        marginBottom: scale(10),
        elevation: 10,
        padding: scale(8),
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    button1: {
        alignItems: 'center',
        marginTop: scale(20),
        marginBottom: scale(10),
        elevation: 10,
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,

        color: COLOR_JINGGA
    },
    soal: {
        color: COLOR_FONT_PURPLE,
        marginTop: scale(10),
        marginLeft: scale(20),
        marginRight: scale(10),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    number: {
        paddingTop: scale(30),
        marginLeft: scale(10),
        alignSelf: 'flex-start',
        color: COLOR_FONT_PURPLE,
        fontSize: 20
    },
    tombol: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingLeft: scale(15),
        marginTop: scale(20)
    },
    pilihan: {
        marginTop: scale(20)

    },
    appVersion: { fontSize: 14 }
});

export default styles;
