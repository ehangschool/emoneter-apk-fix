/* eslint-disable import/first */
import React from 'react';
import { View, Text, Card, Image, ScrollView } from 'react-native';
import CardPeng from '../../components/elements/CardPeng';
import CardPembahasan from '../../components/elements/CardPembahasan';
import Button from '../../components/elements/Button';
import MainScreen from '../../components/layouts/MainScreen';
import { Radio } from 'native-base';
import Header from '../../components/elements/Header';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import MATERI_STRING from '../../../assets/strings';
// import { ScrollView } from 'react-native';

// import BackButton from '../../components/elements/BackButton';

export default class Component extends React.Component {
    state = {
        jsonData: '',
        jsonPilA: '',
        jsonPilB: '',
        jsonPilC: '',
        jsonPilD: '',
        jsonNum: '',
        jsonRight: '',
        jsonPilE: ''
    };
    componentDidMount() {
        fetch('http://ec2-54-152-120-82.compute-1.amazonaws.com/api/quiz/1', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    jsonData: json.question,
                    jsonPilA: json.answer_a,
                    jsonPilB: json.answer_b,
                    jsonPilC: json.answer_c,
                    jsonPilD: json.answer_d,
                    jsonNum: json.number,
                    jsonRight: json.right_answer,
                    jsonPilE: json.answer_e
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    _backHome = () => {
        this.props.navigation.navigate('App');
    };
    _handleLanjut = () => {
        this.props.navigation.navigate('LatianEnd');
    };

    render() {
        return (
            <MainScreen>
                <StatusBar />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <View style={styles.mainContainer}>
                        <View stye={styles.ruang}>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                            <View>
                                <Text style={styles.soal}>{this.state.jsonData}</Text>
                            </View>
                            <View>
                                <CardPeng
                                    bodyTitle={this.state.jsonRight}
                                />
                            </View>
                            <View style={styles.pem}>
                                <CardPembahasan bodyLeftDesc={this.state.jsonRight} />
                            </View>
                            <View>
                                {/* <Image source={IMAGES.pem} resizeMode="contain" style={styles.logo} /> */}
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                            </View>
                            <View>
                                <CardPeng />
                            </View>
                            <View style={styles.concard}>
                                <CardPembahasan bodyLeftDesc={MATERI_STRING.PEMBAHASAN1} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </MainScreen>
        );
    }
}

Component.propTypes = {
    navigation: PropTypes.object.isRequired
};
