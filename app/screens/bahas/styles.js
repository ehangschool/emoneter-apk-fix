import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_FONT_PURPLE, COLOR_GREY, COLOR_JINGGA } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { black, white } from '../../styles/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: COLOR_BASE_PRIMARY_PURPLE
    },
    header: {
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: scale(15),
        height: scale(60)

    },
    headerm: {
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
        // marginTop: scale(15)

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
        width: 350,
        height: 550,
        alignSelf: 'center',
        padding: scale(20)
    },
    appTitle: { fontSize: 18, color: COLOR_BLACK },
    button: {
        alignItems: 'flex-start',
        marginTop: scale(40),
        left: scale(35)
    },
    back: {
        width: 25,
        top: 5,
        marginLeft: scale(25)
        // height: 35,
    },
    name: {
        marginTop: scale(85),
        marginLeft: '15%',
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'Nunito Sans',
        paddingRight: '30%'
    },
    pembahasan: {
        marginTop: 10,
        marginLeft: scale(15),
        fontSize: 15,
        color: COLOR_WHITE,
        marginBottom: scale(10)

    },
    soa12: {
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(20),
        // marginRight: scale(20),
        // paddingTop: scale(55),
        marginTop: scale(10),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23

    },
    no: {
        color: COLOR_FONT_PURPLE,
        textAlign: 'left',
        marginTop: scale(10),
        fontSize: 17,
        fontFamily: 'Playfair Display',
        fontStyle: 'normal',
        fontWeight: 'normal'



    },
    score: {
        marginTop: '23%',
        textAlign: 'right',
        marginRight: '10%',
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Nunito Sans'

    },
    hiya: {
        // borderWidth: 1,
        // borderColor: COLOR_GREY,
        elevation: 4,
        backgroundColor: COLOR_JINGGA,
        marginTop: scale(30),
        marginBottom: scale(20),
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6

    },
    back: {
        width: '10%'
        // height: '30%'

    },
    content: {
        marginTop: '15%',
        borderWidth: 0.5,
        padding: scale(15),
        borderRadius: scale(20),
        shadowColor: COLOR_WHITE,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        marginBottom: '5%',

        borderColor: white

    },
    concard: {
        paddingBottom: scale(30),
        marginBottom: scale(30)

    },
    Kuis: {
        color: COLOR_WHITE,
        fontSize: 45,
        fontWeight: '800',
        fontStyle: 'normal',
        marginTop: scale(-100),
        textAlign: 'center',
        padding: scale(15)
    },
    kuis_desc: {
        textAlign: 'center',
        color: COLOR_WHITE,
        fontSize: 17
    },
    button: {
        alignItems: 'center',
        marginTop: scale(45)

    },
    appVersion: { fontSize: 14 }
});

export default styles;
