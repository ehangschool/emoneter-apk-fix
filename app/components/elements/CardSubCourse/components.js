import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  render() {
    const { bodyTitle, bodyDesc, style, move, label, customButton, customText } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.bodyContainer}>
          <View style={styles.body}>
            <Text style={[styles.bodyTitleText, customText]}>{bodyTitle}</Text>
            <Text style={styles.bodyDescText}>{bodyDesc}</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.button, customButton]} onPress={move}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Component.propTypes = {
  style: PropTypes.object,
  bodyTitle: PropTypes.string,
  bodyDesc: PropTypes.string,
  customButton: PropTypes.number,
  customText: PropTypes.number,
  label: PropTypes.string,
  move: PropTypes.func
};

Component.defaultProps = {
  style: null,
  bodyTitle: 'Title',
  bodyDesc: 'Desc',
  customButton: null,
  customText: null,
  label: 'Label',
  move: noop
};
