import React from 'react';
import { View, Image, StatusBar, ImageBackground } from 'react-native';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';
import styles from './styles';
import IMAGES from '../../configs/images';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    const auth = await storage.get(STORAGE_KEY.TOKEN_LOGIN);

    StatusBar.setHidden(true);

    if (data !== null && JSON.stringify(auth) === JSON.stringify({})) {
      this.props.navigation.navigate('login');
    } else {
      this.props.navigation.navigate('Home');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 4000)
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar />
        <ImageBackground source={IMAGES.bg} style={{ width: '100%', height: '100%' }}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.applogo4x} resizeMode="contain" style={styles.logo} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
