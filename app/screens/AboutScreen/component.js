/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import Logo from '../../../assets/svgs/appLogo';
import styles from './styles';
import IMAGES from '../../configs/images';
import StatusBar from '../../components/elements/StatusBar';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';
import { scale } from '../../utils/scaling';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descImageText:
        'E-Mon adalah platform buku online untuk memudahkan siswa belajar materi tentang Kebijakan Moneter.',
      descText:
        'Aplikasi ini dapat digunakan secara gratis.\nAnda membaca materi  dengan lebih praktis \ndan dioptimalkan untuk perangkat Android.\n\nMenyajikan kepada Anda untuk menjelajahi \nmateri tentang Kebijakan Moneter. Aplikasi \npendidikan dengan desain konsep ini \nmembantu Anda untuk memahami nya.\n\n* Representasi gambar dan video yang \n   memadahi bagi Anda untuk mengingat \n   konten.\n* Konten yang disajikan lengkap dan mudah \n   dipahami'
    };
  }

  _backHome = () => {
    this.props.navigation.navigate('AboutProfileScreen');
  };
  _handleMateri = () => {
    this.props.navigation.navigate('RefrensiScreen');
  };

  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <StatusBar />
        <Header title="Tentang Kami" setting back />
        <ScrollView>
          <View style={styles.descImageText}>
            <Image source={IMAGES.appLogoMin} style={styles.appLogoDesc} />
            <Text style={styles.appDescImage}>{this.state.descImageText}</Text>
          </View>
          <Text style={styles.appDesc}>{this.state.descText}</Text>
          <TouchableOpacity onPress={this._profile} {...this.props}>
            <View
              style={{
                marginStart: 120,
                width: scale(50),
                marginEnd: 120,
                borderBottomColor: '#c4c4c4',
                alignSelf: 'center'
                // marginBottom: scale(10)
              }}
            />
            <View style={styles.row}>
              <TouchableOpacity onPress={this._backHome}>
                <Image style={styles.ply} source={IMAGES.ply} resizeMode="contain" />
                <Text style={styles.ourTeam}>Refrensi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._handleMateri}>
                <Image style={styles.ply} source={IMAGES.ply} resizeMode="contain" />
                <Text style={styles.ourTeam2}>Our Team Members</Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity onPress={this._handleMateri}>
            <Image style={styles.button} source={IMAGES.buttonBlue} resizeMode="contain" />
          </TouchableOpacity> */}
          </TouchableOpacity>
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object
};

Component.defaultProps = {
  navigation: null
};
