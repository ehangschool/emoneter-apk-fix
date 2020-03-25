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
    header: {
        color: COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 25,
        // textAlign: 'center',
        marginTop: scale(65),
        marginLeft: scale(45)

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
    content: {
        flexDirection: 'row'

    },
    card: {
        flexDirection: 'row',
        marginTop: scale(70),
        // marginLeft: scale(25),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'


    },
    card2: {
        flexDirection: 'row',
        marginTop: scale(50),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    },
    cardItemContainer: {
        elevation: 3
        // marginLeft: scale(15)
    },
    cardItemContainer2: {
        elevation: 3,
        marginLeft: scale(25)
    },
    Juduldec: {
        fontSize: 15,
        color: COLOR_WHITE,
        top: scale(75),
        left: scale(15),
        position: 'absolute'
        // ...FONT_HEADLINE2_PRIMARY
    },
    // logoContainer: { width: scale(100), height: scale(100), alignSelf: 'center', marginTop: scale(200) },
    logo: {
        width: 19,
        height: 23,
        alignSelf: 'flex-end',
        marginLeft: scale(90),
        // marginRight: scale(25),
        marginTop: scale(40)
        // padding: scale(20)
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
