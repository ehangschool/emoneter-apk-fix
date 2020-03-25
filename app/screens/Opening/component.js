/* eslint-disable import/first */
import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import CardBab1 from '../../components/elements/CardBab1';
import CardBab2 from '../../components/elements/CardBab2';
import MainScreen from '../../components/layouts/MainScreen';
import CardBab3 from '../../components/elements/CardBab3';
import MATERI_STRING from '../../../assets/strings';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
// import BackButton from '../../components/elements/BackButton';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
    _handleQuiz = () => {
        this.props.navigation.navigate('Latian4');
    };

    render() {
        return (
            <MainScreen>
                <StatusBar />
                <View style={styles.mainContainer}>
                    <ImageBackground source={IMAGES.quiz} style={{ width: '100%', height: '100%' }}>
                        <View>
                            <Image source={IMAGES.ilus} resizeMode="contain" style={styles.logo} />
                        </View>
                        <View>
                            <Text style={styles.Kuis}>Latihan Soal</Text>
                            <Text style={styles.kuis_desc}>{MATERI_STRING.kuis_desc}</Text>
                            <View style={styles.button}>
                                <Button title="Mulai" onPress={this._handleQuiz} />
                            </View>
                        </View>

                    </ImageBackground>
                </View>
            </MainScreen>
        );
    }
}

Component.propTypes = {
    navigation: PropTypes.object.isRequired
};
