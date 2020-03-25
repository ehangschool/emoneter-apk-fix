/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Text, TextInput, View, Alert, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import I18n from '../../i18n';
import MainScreen from '../../components/layouts/MainScreen';
import Button from '../../components/elements/Button';
import styles from './styles';
import { IMAGES } from '../../configs';
import { ENDPOINT } from '../../configs';
// import BasicTitle from '../../components/elements/

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPass: '',
      isHidden: true,
      isLoading: false
    };
  }

  _showPass = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  _checkTextInput = () => {
    const { email, name, password, confirmPass } = this.state;
    if (email !== '' && name !== '' && password !== '' && confirmPass !== '') {
      if (confirmPass === password) {
        this._registered();
      } else {
        Alert.alert('Password must match');
      }
    } else {
      Alert.alert('Please fill all the credentials');
    }
  };

  _registered = async () => {
    const { name, email, password } = this.state;
    const params = { name, email, password };
    try {
      this.setState({ isLoading: true });
      console.log({ params });
      const result = await ENDPOINT.register(params);
      console.log({ result });
      if (result.expires_in === 3600) {
        ToastAndroid.show('Your Account has Registered', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('network error', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
    this.props.navigation.navigate('login');
  };

  render() {
    const { isLoading, email, name, password, confirmPass, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <TouchableOpacity style={styles.back} onPress={this.props.navigation.navigate('login')}>
          <Image source={IMAGES.backRegister} style={styles.back} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.form}>
          <View>
            <Text style={styles.appTitle}> {I18n.t('emon')} </Text>
          </View>
          <Text style={styles.appDesc}> Hai, Selamat Datang!</Text>
          <View style={styles.inputText}>
            <Image source={IMAGES.email} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
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
          <View style={styles.inputText}>
            <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Name"
              editable
              autoCapitalize="none"
              value={name}
              onChangeText={name =>
                this.setState({
                  name
                })
              }
            />
          </View>
          <View style={styles.inputText}>
            <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
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
          <View style={styles.inputText}>
            <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Confrim Password"
              editable
              secureTextEntry={isHidden}
              autoCapitalize="none"
              value={confirmPass}
              onChangeText={confirmPass =>
                this.setState({
                  confirmPass
                })
              }
            />
          </View>
          <Button title="Register" onPress={this._checkTextInput} />
        </View>
        <View style={styles.margin} />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
