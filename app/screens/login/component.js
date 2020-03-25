/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button2 from '../../components/elements/Button2';
import { IMAGES } from '../../configs';
import { ENDPOINT } from '../../configs';
import MATERI_STRING from '../../../assets/strings';
import axios from 'axios';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _checkTextInput = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      this._signIn();
    } else {
      Alert.alert('Please fill your credentials');
    }
  };

  _showPass = async () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  _handleDAftar = () => {
    this.props.navigation.navigate('Daftar');
  };

  _handlereg = () => {
    this.props.navigation.navigate('register');
  };

  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    const { navigation } = this.props;

    this.setState({ isLoading: true });
    // console.log({ params });
    axios
      .post('http://ec2-54-152-120-82.compute-1.amazonaws.com/api/login', {
        email,
        password
      })
      .then(res => {
        storage.set(STORAGE_KEY.TOKEN_LOGIN, res.data.access_token);
        this.setState({ isLoading: false });
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);

        this.setState({ isLoading: false });
        ToastAndroid.show('network error', ToastAndroid.SHORT);
      });
  };
  // console.log({ result });
  //   if (result.expires_in === 3600) {
  //     await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data.data.token);
  //     navigation.navigate('Home');
  //   } else {
  //     ToastAndroid.show('Failed', ToastAndroid.SHORT);
  //   }
  // } catch (error) {
  //   ToastAndroid.show('network error', ToastAndroid.SHORT);
  // } finally {
  //   this.setState({ isLoading: false });
  // }

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.formContent}>
          <View style={styles.formContent}>
            <View style={styles.logoContainer}>
              <Text style={styles.appTitle}> {I18n.t('emon')} </Text>
            </View>
            <Text style={styles.appDesc}> Hai, Selamat Datang !! </Text>
            <View style={styles.row}>
              <View style={styles.inputText}>
                <Image source={IMAGES.email} resizeMode="contain" style={styles.inputLogo} />
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  textContentType="emailAddress"
                  placeholder="Email"
                  editable
                  autoCapitalize="none"
                  value={email}
                  onChangeText={email =>
                    this.setState({
                      email
                    })
                  }
                />
              </View>
            </View>
            <View style={styles.inputText}>
              <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
              <TouchableOpacity onPress={this._showPass} style={styles.showPassLogo} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                editable
                secureTextEntry={isHidden}
                autoCapitalize="none"
                value={password}
                onChangeText={password =>
                  this.setState({
                    password
                  })
                }
              />
            </View>
            <Button2
              style={styles.buttonLogin}
              type="raised-ripple"
              title={I18n.t('login')}
              onPress={this._checkTextInput}
            />
            <View style={styles.margin} />
          </View>
          <TouchableOpacity onPress={this._handleDAftar} style={styles.registeri}>
            <Text style={styles.register}>Belum punya akun?</Text>
            <Text style={styles.d}>{MATERI_STRING.Daftar} </Text>
          </TouchableOpacity>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
