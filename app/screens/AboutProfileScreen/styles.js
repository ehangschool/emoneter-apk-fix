/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import {
    COLOR_WHITE,
    COLOR_FONT_PURPLE,
    COLOR_BASE_PRIMARY_MAIN,
    FONT_HEADLINE6_PRIMARY,
    FONT_SUBTITLE2_PRIMARY,
    FONT_BODY2_PRIMARY,
    FONT_CAPTION_PRIMARY,
    FONT_BUTTON_PRIMARY
    // COLOR_FONT_PURPLE
} from "../../styles";
import { scale } from "../../utils/scaling";
import METRICS from "../../constants/metrics";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR_WHITE
        // marginTop: scale(20)
    },
    header: {
        flexDirection: "row",
        width: '100%',
        height: scale(60)
    },
    logoContainer: {
        width: scale(150),
        height: scale(150)
    },
    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        marginBottom: METRICS.baseMargin
    },
    buttonBack: {
        width: scale(30),
        height: scale(30),
        margin: scale(20)
    },
    bottom: {
        // flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
        // marginStart: 40
    },
    appTitle: {
        ...FONT_HEADLINE6_PRIMARY,
        color: COLOR_FONT_PURPLE,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    appLogoDesc: {
        width: scale(336),
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: scale(20),
        height: scale(63),
        // marginStart: (40),
        marginTop: scale(20)
    },
    n: {
        marginBottom: scale(40)
    },
    appDesc: {
        ...FONT_SUBTITLE2_PRIMARY,
        color: COLOR_FONT_PURPLE,
        marginBottom: METRICS.doubleSection1,
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingStart: 40,
        paddingEnd: 40
    },
    appDescImage: {
        ...FONT_SUBTITLE2_PRIMARY,
        color: COLOR_FONT_PURPLE,
        marginBottom: METRICS.doubleSection,
        fontSize: 16,
        // justifyContent: "center",
        // alignItems: "center",
        paddingStart: 10,
        marginEnd: 40,
        paddingTop: 10
    },
    descImageText: {
        marginTop: scale(30),
        paddingEnd: scale(40),
        paddingStart: scale(40),
        width: '100%',
        // height: scale(100),
        flexDirection: "row"
    },
    forgetPass: {
        width: scale(90),
        marginLeft: METRICS.fPass,
        marginRight: METRICS.doubleBaseMargin,
        marginBottom: METRICS.doubleSection,
        color: COLOR_BASE_PRIMARY_MAIN,
        ...FONT_CAPTION_PRIMARY
    },
    inputContainer: {
        width: scale(300),
        height: scale(40)
    },
    inputText: {
        margin: scale(10),
        width: scale(300),
        height: scale(40),
        borderRadius: scale(45),
        borderColor: "#c4c4c4",
        borderWidth: scale(1)
    },
    ourTeam: {
        justifyContent: "space-between",
        textAlign: 'left',
        marginLeft: scale(15),
        paddingTop: scale(15),
        color: COLOR_FONT_PURPLE,
        fontSize: 16
    },
    aboutOnClickImage: {
        height: scale(70),
        width: scale(240),
        justifyContent: "space-between",
        alignSelf: "center"
    },
    row: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    input: { marginLeft: scale(30), ...FONT_BODY2_PRIMARY },
    inputLogo: { width: scale(20), height: scale(20), position: "absolute", margin: scale(8) },
    showPassLogo: {
        width: scale(20),
        height: scale(20),
        position: "absolute",
        marginLeft: METRICS.marginHide,
        top: METRICS.topHide
    },
    margin: { marginBottom: METRICS.baseMargin },
    outlined: {
        backgroundColor: COLOR_WHITE,
        borderColor: COLOR_BASE_PRIMARY_MAIN,
        borderWidth: 2
    },
    outlinedText: { color: COLOR_BASE_PRIMARY_MAIN, ...FONT_BUTTON_PRIMARY }
});

export default styles;
