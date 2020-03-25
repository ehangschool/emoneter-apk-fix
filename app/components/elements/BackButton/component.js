import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Back from '../../../../assets/svgs/Back';

export default class Component extends React.Component {
  _handleback = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <TouchableOpacity onPress={this._handleback} style={styles.container}>
        <Back />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
