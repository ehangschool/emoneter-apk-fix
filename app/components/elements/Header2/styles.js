import { StyleSheet, Platform } from 'react-native';
import {
    COLOR_TRANSPARENT,
    FONT_HEADLINE6_PRIMARY,
    // COLOR_BASE_PRIMARY_PURPLE,
    // COLOR_FONT_PRIMARY_DARK,
    COLOR_FONT_PURPLE
} from '../../../styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLOR_TRANSPARENT,
        height: Platform.OS === 'ios' ? 44 : 56
    },
    centerContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftRightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(30)
    },
    title: {
        ...FONT_HEADLINE6_PRIMARY,
        color: COLOR_FONT_PURPLE,
        marginTop: scale(20),
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 40
    }
});
