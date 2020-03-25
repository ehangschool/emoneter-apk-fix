/* eslint-disable global-require */
/* eslint-disable import/first */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { TouchableOpacity, View, ScrollView, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import StatusBar from '../../components/elements/StatusBar';
import MainScreen from '../../components/layouts/MainScreen';
import MATERI_STRING from '../../../assets/strings';
import VideoPlayer from 'react-native-video-player';
import { IMAGES } from '../../configs';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined
    };
  }

  _handleMateri = () => {
    this.props.navigation.navigate('Materi');
  };

  render() {
    return (
      <MainScreen style={styles.container} animationType="left">
        <StatusBar />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Image source={IMAGES.tag} resizeMode="contain" style={styles.imgtag} />
          <View>
            <Text style={styles.judul}>Kebijakan Moneter</Text>
            <View style={{ marginTop: '5%', marginRight: '5%', marginLeft: '5%', width: '90%' }}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri:
                    'https://rawcdn.githack.com/ronyaryaW1/video/b6c59f044aa3e1b4c0d65dfdeb80c63acbd557a1/download.jpg'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/ehangschool/video-emon/1f20a866222d21fa0b82ce13149da3d2198d0213/kebijakan-moneter.mp4'
                }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
            </View>
          </View>
          <Image source={IMAGES.Rectangle} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Pengertian</Text>
          <Text style={styles.text}>{MATERI_STRING.MONETER_PENGERTIAN}</Text>
          <Image source={IMAGES.biru} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Jenis-Jenis Kebijakan Moneter</Text>
          <Text style={styles.ekspansive}>1. Kebijakan Ekspansif</Text>
          <Text style={styles.text}>{MATERI_STRING.MONETER_JENIS_EKSPANSIF}</Text>
          <Text style={styles.ekspansive}>2. Kebijakan Kontraktif</Text>
          <Text style={styles.text}>{MATERI_STRING.MONETER_JENIS_KONTRAKTIF}</Text>
          <Image source={IMAGES.kuning} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Tujuan</Text>
          <Text style={styles.text}>{MATERI_STRING.MONETER_TUJUAN}</Text>
          <TouchableOpacity onPress={this._handleMateri}>
            <Image style={styles.button} source={IMAGES.buttonBlue} resizeMode="contain" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={this._handleMateri}>
            <Image style={styles.o} source={IMAGES.buttonBlue} resizeMode="contain" />
          </TouchableOpacity> */}
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
