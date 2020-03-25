import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
// import Logo from '../../../assets/svgs/Logo';
// import CardMateri from '../../components/elements/CardMateri';
// import Cardhead from '../../components/elements/Cardhead';
// import CardPeng from '../../components/elements/CardPeng';
// import CardJenis from '../../components/elements/CardJenis';
// import CardTujuan from '../../components/elements/CardTujuan';
import styles from './styles';
// import I18n from '../../i18n';
import IMAGES from '../../configs/images';
// import PropTypes from 'prop-types';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  _backHome = () => {
    //   const { navigation } = this.props;
    //   navigation.navigate('Home');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={IMAGES.bab1} style={{ width: '100%', height: '100%' }}>
          <View>
            <Text style={styles.Pengertian}>
              Kebijakan moneter adalah seperangkat kebijakan ekonomi yang dibuat untukmengatur ukuran &
              tingkat pertumbuhan pasokan uang di dalam perekonomian negara dan membantu mengatur variabel
              makro ekonomi, seperti innflasi ataupun penggangguran. Kebijakan ini diambil oleh bank sentral
              atau Bank Indonesia.
            </Text>
            {/* <Text style={styles.Judul}> Kebijakan Moneter </Text>
            <Text style={styles.Juduldec}> Materi PPKN </Text> */}
            {/* <Cardhead /> */}
            {/* <View /> */}
            {/* <CardPeng /> */}
            {/* <CardJenis />
            <CardTujuan /> */}
            {/* <TouchableOpacity onPress={this._backHome}>
              <Image style={styles.button} source={IMAGES.buttonBlue} />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

// Component.defaultProps = {
//   navigation: null
// };
