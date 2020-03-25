/* eslint-disable import/no-duplicates */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button2 from '../../components/elements/Button2';
import { IMAGES } from '../../configs';
import { ENDPOINT } from '../../configs';
import MATERI_STRING from '../../../assets/strings';

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

    _showPass = async () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    };

    _handleak = () => {
        this.props.navigation.navigate('login');
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
                            <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                textContentType="emailAddress"
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
                            <TouchableOpacity onPress={this._showPass} style={styles.showPassLogo}>
                                {/* <Image source={IMAGES.eye} resizeMode="contain" style={styles.showPassLogo} /> */}
                            </TouchableOpacity>
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
                        <Button2
                            style={styles.buttonLogin}
                            type="raised-ripple"
                            title='REGISTER'
                            onPress={this._checkTextInput}
                        />
                        <View style={styles.margin} />
                    </View>
                    <TouchableOpacity onPress={this._handleak} style={styles.registeri}>
                        <Text style={styles.register}>Sudah punya akun?</Text>
                        <Text style={styles.d}>{MATERI_STRING.masuk} </Text>
                    </TouchableOpacity>
                </View>
            </MainScreen>
        );
    }
}

Component.propTypes = {
    navigation: PropTypes.object.isRequired
};
