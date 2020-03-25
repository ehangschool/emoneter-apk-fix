/* eslint-disable import/first */
import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import TogleButton from '../../components/elements/TogleButton';
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

        jsonPilE: ''
    };
    componentDidMount() {
        fetch('http://ec2-54-152-120-82.compute-1.amazonaws.com/api/quiz/7', {
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
                    jsonPilE: json.answer_e
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    _backHome = () => {
        this.props.navigation.navigate('Latian6');
    };
    _handleLanjut = () => {
        this.props.navigation.navigate('Latian8');
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.mainContainer}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            return (
                <MainScreen>
                    <StatusBar />
                    <ScrollView>
                        {/* <Header title="Latihan Soal" setting back /> */}
                        {/* <Text>4/10</Text> */}
                        <View style={styles.mainContainer}>
                            <View>
                                <Text style={styles.number}>{this.state.jsonNum}</Text>
                                {/* <View /> */}
                                {/* <Image source={IMAGES.soal} resizeMode="contain" style={styles.logo} /> */}
                                <View>
                                    <Text style={styles.soal}>{this.state.jsonData}</Text>
                                </View>
                                <View>
                                    <TogleButton textvalue={this.state.jsonPilA} />
                                    <TogleButton textvalue={this.state.jsonPilB} />
                                    <TogleButton textvalue={this.state.jsonPilC} />
                                    <TogleButton textvalue={this.state.jsonPilD} />
                                    <TogleButton textvalue={this.state.jsonPilE} />
                                </View>
                                <View style={styles.tombol}>
                                    <View style={styles.button}>
                                        <Button title="Kembali" onPress={this._backHome} />
                                    </View>
                                    <View style={styles.button}>
                                        <Button title="lanjut" onPress={this._handleLanjut} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </MainScreen>
            );
        }
    }
}

Component.propTypes = {
    navigation: PropTypes.object.isRequired
};
