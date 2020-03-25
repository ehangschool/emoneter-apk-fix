import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { headerTitle, bodyLeftTitle, bodyLeftDesc, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.top} />
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>{headerTitle}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.body}>
            <Text style={styles.bodyTitleText}>{bodyLeftTitle}</Text>
            <Text style={styles.bodyBodyText}>{bodyLeftDesc}</Text>
          </View>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  style: PropTypes.object,
  // image: PropTypes.number,
  headerTitle: PropTypes.string,
  bodyLeftTitle: PropTypes.string,
  bodyLeftDesc: PropTypes.string
};

Component.defaultProps = {
  style: null,
  headerTitle: 'Header',
  // image: IMAGES.ava2,
  bodyLeftTitle: 'Title',
  bodyLeftDesc: 'Desc'
};
