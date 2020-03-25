import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_PURPLE, COLOR_BLUE_OPACITY, COLOR_FONT_PURPLE, COLOR_GREY, COLOR_JINGGA } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: '#F5FCFF'
        flex: 1,
        backgroundColor: COLOR_BASE_PRIMARY_PURPLE,
        justifyContent: 'center'
    },
    soal: {
        color: COLOR_WHITE,
        marginLeft: scale(20),
        marginRight: scale(10),
        // paddingTop: scale(5),
        marginTop: scale(40),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    pilihan: {
        marginLeft: scale(20),
        marginTop: scale(30),
        backgroundColor: COLOR_WHITE,
        borderWidth: scale(5),
        width: scale(260),
        borderRadius: scale(40)
    },
    Pertanyaan: {
        marginTop: scale(-20)
    },
    klik: {
        marginTop: scale(30),
        flex: 1,
        flexDirection: 'row'
    }
    // tombol: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginTop: scale(20)
    // }
});

export default styles;
