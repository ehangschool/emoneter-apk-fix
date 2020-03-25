/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
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
  _backHome = () => {
    this.props.navigation.navigate('AboutScreen');
  };
  _handleMateri = () => {
    this.props.navigation.navigate('RefrensiScreen');
  };

  render() {
    return (
      <MainScreen style={styles.mainContainer}>
        <StatusBar />
        <Header title="Refrensi" setting back />
        <ScrollView>
          <View style={styles.n}>
            {/* <TouchableOpacity onPress={() => Linking.openURL('http://www.academia.edu/11437617com')}> */}

            <Image
              source={IMAGES.ref}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //               onPress={() => {
            //                 Linking.openURL('https://www.academia.edu/11437617/kebijakan_
            // moneter_dan_penerapannya_PPT_ ? auto = download');
            //               }}

            />
            {/* </TouchableO/pacity> */}

            <Image
              source={IMAGES.m}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //             onPress={() => {
            //                 Linking.openURL('https://www.jurnal.id/id/blog/2017-pengertian-
            // tujuan - dan - instrumen - kebijakan - moneter / ');
            //               }}
            />
            <Image
              source={IMAGES.n}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //             onPress={() => {
            //               Linking.openURL('https://cpssoft.com/blog/keuangan/penjelasan-
            // lengkap - kebijakan - moneter /
            //                 ');
            //               }}
            />
            <Image
              source={IMAGES.o}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //             onPress={() => {
            //               Linking.openURL('https://ekspektasia.com/kebijakan-fiskal-dan-
            // moneter /
            //                 ');
            //               }}
            />
            <Image
              source={IMAGES.p}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //             onPress={() => {
            //               Linking.openURL('https://www.jurnal.id/id/blog/2017-pengertian-
            // tujuan - dan - macam - macam - kebijakan - fiskal / ');
            //               }}
            />
            <Image
              source={IMAGES.q}
              style={styles.appLogoDesc}
              resizeMode="contain"
            //             onPress={() => {
            //               Linking.openURL('https://id.wikipedia.org/wiki/Kebijakan_fiskal
            // ');
            //               }}
            />
            <Image
              source={IMAGES.r}
              style={styles.appLogoDesc}
              resizeMode="contain"
            // onPress={() => {
            //   Linking.openURL('https://www.online-pajak.com/fiskal');
            // }}
            />
            {/* <Text style={styles.appDescImage}>{this.state.descImageText}</Text> */}
          </View>
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
