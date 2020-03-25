import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { bodyTitle, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.top} />
        <View style={styles.body}>
          <Text style={styles.bodyTitleText}>{bodyTitle}</Text>
        </View>
        <View style={styles.headerContainer}>
          {/* <Image source={image} resizeMode="contain" style={styles.imageHeader} /> */}
        </View>
        <View style={styles.bodyContainer} />
      </View>
    );
  }
}

Component.propTypes = {
  style: PropTypes.object,
  // image: PropTypes.number,
  bodyTitle: PropTypes.string
  // move: PropTypes.number
};

Component.defaultProps = {
  style: null,
  // image: IMAGES.ava2,
  bodyTitle: 'Mau Belajar Apa Hari Ini ?'
};
