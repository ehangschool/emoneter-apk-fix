/* eslint-disable import/first */
import React from 'react';
import { View } from 'react-native';
import CardBab1 from '../../components/elements/CardBab1';
import CardBab2 from '../../components/elements/CardBab2';
import MainScreen from '../../components/layouts/MainScreen';
import CardBab3 from '../../components/elements/CardBab3';
import Header from '../../components/elements/Header';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
// import BackButton from '../../components/elements/BackButton';

export default class Component extends React.Component {
  _backHome = () => {
    this.props.navigation.navigate('App');
  };
  _handleFis = () => {
    this.props.navigation.navigate('Fiskal');
  };
  _handleKeb = () => {
    this.props.navigation.navigate('KebMoneter');
  };
  _handleLem = () => {
    this.props.navigation.navigate('lembaga');
  };

  render() {
    return (
      <MainScreen>
        <StatusBar />
        <Header title="Materi" setting back />
        <View style={styles.mainContainer}>
          <View>
            <View />
            <CardBab1 move={this._handleKeb} {...this.props} />
            <CardBab2 move={this._handleFis} {...this.props} />
            <CardBab3 move={this._handleLem} {...this.props} />
          </View>
          {/* </ImageBackground> */}
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
