import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { bodyTitle, style, move, bodyDesc } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={move}>
        <View style={styles.top} />
        <View style={styles.body}>
          <Text style={styles.bodyDescText}>{bodyDesc}</Text>
          <Text style={styles.bodyTitleText}>{bodyTitle}</Text>
        </View>
        <View style={styles.headerContainer}>
          {/* <Image source={image} resizeMode="contain" style={styles.imageHeader} /> */}
        </View>
        <View style={styles.bodyContainer} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  style: PropTypes.object,
  bodyDesc: PropTypes.string,
  bodyTitle: PropTypes.string,
  move: PropTypes.number
};

Component.defaultProps = {
  style: null,
  bodyDesc: 'Bab 2',
  bodyTitle: 'Kebijakan Fiskal',
  move: null
};
