import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_FONT_PURPLE, COLOR_JINGGA, COLOR_WHITE } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE
  },
  button: {
    marginBottom: scale(50),
    marginTop: scale(130),
    marginLeft: scale(20),
    width: '15%',
    height: '15%'
    // marginBottom: scale(20)
  },
  tombl: {
    flexDirection: 'row'
  },
  card: {
    height: scale(400),
    marginBottom: scale(60)
  },
  imgtag: {
    alignSelf: 'flex-end',
    marginTop: scale(20),
    width: 107,
    height: 36
  },
  judul: {
    fontSize: 22,
    marginTop: scale(50),
    color: COLOR_FONT_PURPLE,
    textAlign: 'center',
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  imgP: {
    top: scale(15),
    marginLeft: scale(5)
  },
  pengertian: {
    color: COLOR_FONT_PURPLE,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: scale(20)
    // textAlign: 'left'
  },
  ekspansive: {
    color: COLOR_JINGGA,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: scale(20)
  },
  imgbi: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  content: {
    // padding: scale(5),
    marginRight: scale(10),
    marginLeft: scale(10)
    // marginBottom: scale(10)
  },
  text: {
    color: COLOR_FONT_PURPLE,
    marginLeft: scale(5),
    marginRight: scale(5),
    padding: scale(8),
    paddingBottom: scale(4),
    fontSize: 17,
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 23
  }
});

export default styles;
