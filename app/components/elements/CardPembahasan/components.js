import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { image, style, move, bodyTitle, bodyLeftDesc } = this.props;
    return (
      <View style={[styles.container, style]} onPress={move}>
        <View style={styles.top} />
        <View style={styles.body}>
          <Text style={styles.bodyTitleText}>{bodyTitle}</Text>
          <Text style={styles.bodyBodyText}>{bodyLeftDesc}</Text>
        </View>
        <View style={styles.headerContainer}>
          <Image source={image} resizeMode="contain" style={styles.imageHeader} />
        </View>
        <View style={styles.bodyContainer} />
      </View>
    );
  }
}

Component.propTypes = {
  style: PropTypes.object,
  image: PropTypes.number,
  bodyTitle: PropTypes.string,
  move: PropTypes.number,
  bodyLeftDesc: PropTypes.string
};

Component.defaultProps = {
  style: null,
  image: IMAGES.ava2,
  bodyTitle: 'Pembahasan',
  bodyLeftDesc: '',
  move: null
};
