/* eslint-disable no-return-assign */
/* eslint-disable import/first */
/* eslint-disable react/no-unused-state */
import React from 'react';
// import { Card } from 'native-base';
import { TouchableOpacity, View, ScrollView, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import StatusBar from '../../components/elements/StatusBar';
import MainScreen from '../../components/layouts/MainScreen';
// import CardSubCourse from '../../components/elements/CardSubCourse';
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
          <Image source={IMAGES.bab3} resizeMode="contain" style={styles.imgtag} />
          {/* <ImageBackground source={IMAGES.bab1} style={{ height: null, width: null, paddingBottom: 80 }}> */}
          <View>
            <Text style={styles.judul}>Lembaga Yang Mengatur</Text>
            <View style={{ marginTop: '5%', marginRight: '5%', marginLeft: '5%', width: '90%' }}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri:
                    'https://rawcdn.githack.com/ronyaryaW1/video/c6535f89c5abb8523dac64890490d8b6650c4794/images.jpg'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/ehangschool/video-emon/1f20a866222d21fa0b82ce13149da3d2198d0213/bank-indonesia.mp4'
                }}
                // source={require('./videos/a.mp4')}

                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{MATERI_STRING.LEMBAGA_PARAGRAF_1}</Text>
            <Text style={styles.text}>{MATERI_STRING.LEMBAGA_PARAGRAF_2}</Text>
            <Text style={styles.text}>{MATERI_STRING.LEMBAGA_PARAGRAF_3}</Text>
            <Text style={styles.text}>{MATERI_STRING.LEMBAGA_PARAGRAF_4}</Text>
            <Text style={styles.text}>{MATERI_STRING.LEMBAGA_PARAGRAF_5}</Text>
          </View>
          <TouchableOpacity onPress={this._handleMateri}>
            <Image style={styles.button} source={IMAGES.buttonBlue} />
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
