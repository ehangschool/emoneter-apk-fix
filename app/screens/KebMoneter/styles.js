import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import { COLOR_JINGGA, COLOR_WHITE, COLOR_FONT_PURPLE } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE
  },
  button: {
    marginBottom: scale(70),
    marginTop: scale(60),
    marginLeft: scale(20),
    width: '17%',
    height: '17%'
  },
  // gobutton: {
  //   // marginBottom: scale(80),
  //   flexWrap: 'wrap',
  //   // marginTop: scale(50),
  //   marginRight: scale(20),
  //   alignSelf: 'flex-end'
  //   // position: 'absolute'
  // },
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
    marginLeft: scale(20)
  },
  pengertian: {
    color: COLOR_FONT_PURPLE,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: scale(40),
    fontFamily: 'Nunito Sans'
  },
  ekspansive: {
    color: COLOR_JINGGA,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: scale(40)
  },
  imgbi: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  text: {
    color: COLOR_FONT_PURPLE,
    marginLeft: scale(40),
    marginRight: scale(40),
    fontSize: 17,
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 23,
    padding: scale(8)
  }
});

export default styles;
