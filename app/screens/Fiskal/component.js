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
          <Image source={IMAGES.bab2} resizeMode="contain" style={styles.imgtag} />
          <View>
            <Text style={styles.judul}>Kebijakan Fiskal</Text>
            <View style={{ marginTop: '5%', marginRight: '5%', marginLeft: '5%', width: '90%' }}>
              <VideoPlayer
                endWithThumbnail
                thumbnail={{
                  uri:
                    'https://rawcdn.githack.com/ronyaryaW1/video/f1b62eeec9376579ddc87ee60fae83aeb59cc261/download (1).jpg'
                }}
                video={{
                  uri:
                    'https://rawcdn.githack.com/ehangschool/video-emon/1f20a866222d21fa0b82ce13149da3d2198d0213/analisis-kebijakan-fiskal.mp4'
                }}
                // source={require('./videos/a.mp4')}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration}
                ref={r => (this.player = r)}
              />
            </View>
          </View>
          {/* <Image source={IMAGES.bi} resizeMode="contain" style={styles.imgbi} /> */}
          <Image source={IMAGES.Rectangle} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Pengertian</Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_PENGERTIAN}</Text>
          <Image source={IMAGES.kuning} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Pelaksanaan Kebijakan Fiskal</Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_PELAKSANAAN}</Text>
          <Image source={IMAGES.biru} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Tujuan</Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_TUJUAN}</Text>
          <Image source={IMAGES.kuning} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Jenis-Jenis Kebijakan Fiskal</Text>
          <Text style={styles.ekspansive}>A. Dari Segi Teori</Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_JENIS_TEORI}</Text>
          <Text style={styles.ekspansive}>B. Dari Jumlah Penerimaan dan Pengeluaran</Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_JENIS_PENERIMAAN}</Text>
          <Image source={IMAGES.kuning} resizeMode="contain" style={styles.imgP} />
          <Text style={styles.pengertian}>Instrument Kebijakan Fiskal </Text>
          <Text style={styles.text}>{MATERI_STRING.FISKAL_INSTRUMEN}</Text>
          <TouchableOpacity onPress={this._handleMateri}>
            <Image style={styles.button} source={IMAGES.buttonBlue} />
          </TouchableOpacity>
          {/* <CardSubCourse
                style={styles.card}
                bodyTitle="Kebijakan Moneter"
                bodyDesc={MATERI_STRING.MONETER_PENGERTIAN}
                label="Selesai"
                move={this._handleNavigateSucces}
                {...this.props}
                customButton={styles.button}
                customText={styles.text}
                image={IMAGES.bi}
              /> */}
          {/* <Image source={IMAGES.bi} /> */}
          {/* </View> */}
          {/* </ImageBackground> */}
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
