/* eslint-disable import/first */
import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import CardBab3 from '../../components/elements/CardBab3';
import MATERI_STRING from '../../../assets/strings';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
// import MATERI_STRING from '../../../assets/strings'
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
    _back = () => {
        this.props.navigation.navigate('AboutScreen');
    };
    _handleQuiz = () => {
        this.props.navigation.navigate('QuizScreen');
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
                {/* <Header2 title="Our Team" setting back /> */}
                <View style={styles.mainContainer}>
                    <ImageBackground source={IMAGES.bgpro} style={{ width: '100%', height: '100%' }}>

                        <View>
                            <TouchableOpacity>
                                {/* <Image source={IMAGES.backw} resizeMode="contain" style={styles.back} onPress={this._back} /> */}
                            </TouchableOpacity>
                            <Text style={styles.header}>{MATERI_STRING.mem}</Text>
                            <Image source={IMAGES.member} resizeMode="contain" style={styles.logo} />
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
