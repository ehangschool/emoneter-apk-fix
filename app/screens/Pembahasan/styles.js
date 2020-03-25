import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BLUE_OPACITY, COLOR_FONT_PURPLE, COLOR_GREY } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
    mainContainer: {
        padding: 0,
        margin: 0,
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
    ruang: {
        borderWidth: 1,
        marginTop: scale(5),
        borderRadius: scale(15)

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
    concard: {
        paddingBottom: scale(30),
        marginBottom: scale(30)

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
        width: scale(313),
        height: scale(135),
        marginTop: scale(0),
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
        shadowRadius: 6
    },
    button1: {
        alignItems: 'center',
        marginTop: scale(30),
        marginBottom: scale(10),
        elevation: 10,
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6

    },
    pem2: {
        marginTop: scale(120)

    },
    soal: {
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(20),
        marginRight: scale(20),
        // paddingTop: scale(5),
        // marginTop: scale(10),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    soa12: {
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(20),
        marginRight: scale(20),
        paddingTop: scale(55),
        // marginTop: scale(10),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    tombol: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(20)
    },
    appVersion: { fontSize: 14 }
});

export default styles;
