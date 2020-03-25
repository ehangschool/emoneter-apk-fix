/* eslint-disable import/first */
import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import CardItem from '../../components/elements/CardItem';
import MATERI_STRING from '../../../assets/strings';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
// import MATERI_STRING from '../../../assets/strings'
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
    _handleNavigateMateri = () => {
        this.props.navigation.navigate('Materi');
    };

    _handleNavigateLatihanSoal = () => {
        this.props.navigation.navigate('Opening');
    };
    _handlekuis = () => {
        this.props.navigation.navigate('quiz');
    };

    _handleNavigateAbout = () => {
        this.props.navigation.navigate('AboutScreen');
    };
    _handleQuiz = () => {
        this.props.navigation.navigate('Latian4');
    };
    render() {
        return (
            <MainScreen>
                <StatusBar />
                {/* <Header2 title="Our Team" setting back /> */}
                <View style={styles.mainContainer}>
                    <ImageBackground
                        source={IMAGES.bgh}
                        style={{ width: '100%', height: '100%', paddingTop: 0, marginTop: 0 }}
                    >
                        <View style={styles.content}>
                            <Text style={styles.header}>{MATERI_STRING.selamat}</Text>
                            {/* <Text style={styles.header}>Wulan Apriansah</Text> */}
                            <TouchableOpacity>
                                <Image source={IMAGES.logout} resizeMode="contain" style={styles.logo} />
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.header}>{MATERI_STRING.selamat}</Text> */}
                        <View style={styles.card}>
                            <CardItem
                                image={IMAGES.materi}
                                style={styles.cardItemContainer}
                                bodyTitle="Materi"
                                move={this._handleNavigateMateri}
                                {...this.props}
                            />
                            <CardItem
                                image={IMAGES.kuiz}
                                style={styles.cardItemContainer2}
                                bodyTitle="Kuis"
                                bodyDesc=""
                                move={this._handlekuis}
                                {...this.props}
                            />
                        </View>
                        <View style={styles.card2}>
                            <CardItem
                                image={IMAGES.lat}
                                style={styles.cardItemContainer}
                                bodyTitle="Latihan Soal"
                                bodyDesc=""
                                move={this._handleNavigateLatihanSoal}
                                {...this.props}
                            />
                            <CardItem
                                image={IMAGES.kami}
                                style={styles.cardItemContainer2}
                                bodyTitle="Tentang Kami"
                                bodyDesc=""
                                move={this._handleNavigateAbout}
                                {...this.props}
                            />
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
