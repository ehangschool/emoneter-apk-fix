/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import {
    COLOR_WHITE,
    //   COLOR_BLACK,
    COLOR_BASE_PRIMARY_MAIN,
    FONT_HEADLINE6_PRIMARY,
    FONT_SUBTITLE2_PRIMARY,
    FONT_BODY2_PRIMARY,
    FONT_CAPTION_PRIMARY,
    FONT_BUTTON_PRIMARY,
    COLOR_BASE_PRIMARY_PURPLE,
    COLOR_JINGGA
} from "../../styles";
import { scale } from "../../utils/scaling";
import METRICS from "../../constants/metrics";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLOR_WHITE
    },
    formContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: { width: scale(150), marginTop: scale(10) },
    logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
    appTitle: {
        ...FONT_HEADLINE6_PRIMARY,
        color: COLOR_BASE_PRIMARY_PURPLE,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: scale(10)
    },
    appDesc: {
        ...FONT_SUBTITLE2_PRIMARY,
        color: COLOR_BASE_PRIMARY_PURPLE,
        marginTop: 5,
        marginBottom: 10
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
        margin: scale(15),
        width: scale(300),
        height: scale(50),
        borderRadius: scale(45),
        elevation: 5,
        backgroundColor: COLOR_WHITE,
        borderColor: COLOR_WHITE,
        borderWidth: scale(1)
    },
    bawah: {
        // marginTop: scale(150)
        // marginBottom: scale(10)
        // paddingTop: scale(150)
    },
    row: {
        alignContent: "center",
        justifyContent: "center",
        flexDirection: 'row',
        position: 'relative',
        alignSelf: 'stretch'


    },
    input: { marginLeft: scale(50), ...FONT_BODY2_PRIMARY, paddingRight: scale(30) },
    inputLogo: { width: scale(20), height: scale(40), position: "absolute", margin: scale(5), marginLeft: scale(20) },
    eye: {
        width: scale(20), height: scale(20), position: "absolute", marginLeft: scale(210)
    },
    unhide: {
        width: scale(20),
        height: scale(20),
        position: "absolute",
        margin: scale(8)
    },
    showPassLogo: {
        width: scale(20),
        height: scale(50),
        marginRight: scale(20),
        alignSelf: "flex-end",
        justifyContent: "center",
        position: "absolute"
        // margin: scale(8)
    },
    buttonLogin: {
        ...FONT_BODY2_PRIMARY
    },
    registeri: {
        flexDirection: 'row'

    },
    register: {
        ...FONT_BODY2_PRIMARY,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: scale(12)
    },
    d: {
        color: COLOR_JINGGA,
        marginBottom: scale(12),
        paddingLeft: scale(5)


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
