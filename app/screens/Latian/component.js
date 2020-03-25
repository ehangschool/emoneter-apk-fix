// /* eslint-disable import/first */
// import React from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import Button from '../../components/elements/Button';
// import MainScreen from '../../components/layouts/MainScreen';
// import StatusBar from '../../components/elements/StatusBar';
// import styles from './styles';
// import RadioForm from 'react-native-simple-radio-button';
// import PropTypes from 'prop-types';
// import TogleButton from '../../components/elements/TogleButton';

// export default class Component extends React.Component {
//     state = {
//         jsonData: '',
//         jsonPilA: '',
//         jsonPilB: '',
//         jsonPilC: '',
//         jsonNum: '',
//         jsonPilD: '',
//         jsonPilE: ''
//     };
//     componentDidMount() {
//         fetch('http://ec2-54-152-120-82.compute-1.amazonaws.com/api/quiz/1', {
//             method: 'GET'
//         })
//             .then(response => response.json())
//             .then(json => {
//                 this.setState({
//                     jsonData: json.question,
//                     jsonPilA: json.answer_a,
//                     jsonPilB: json.answer_b,
//                     jsonPilC: json.answer_c,
//                     jsonPilD: json.answer_d,
//                     jsonPilE: json.answer_e,
//                     jsonNum: json.number
//                 });
//             })
//             .catch(error => {
//                 console.error(error);
//             });

//         _backHome = () => {
//             this.props.navigation.navigate('App');
//         };
//         _handleLanjut = () => {
//             this.props.navigation.navigate('Score');
//         };

//         render() {

//             if (this.state.isLoading) {
//                 return (
//                     <View style={styles.mainContainer}>
//                         <ActivityIndicator />
//                     </View>
//                 );
//             }

//             return (
//                 <MainScreen>
//                     <StatusBar />
//                     <View style={styles.mainContainer}>
//                         <Text style={styles.number}>{this.state.jsonNum}</Text>
//                         <View>
//                             <View>
//                                 <Text style={styles.soal}>{this.state.jsonData}</Text>
//                             </View>
//                             <View>
//                                 <TogleButton textvalue={this.state.jsonPilA} />
//                                 <TogleButton textvalue={this.state.jsonPilB} />
//                                 <TogleButton textvalue={this.state.jsonPilC} />
//                                 <TogleButton textvalue={this.state.jsonPilD} />
//                                 <TogleButton textvalue={this.state.jsonPilE} />
//                             </View>
//                             <View style={styles.tombol}>
//                                 <View style={styles.button}>
//                                     <Button title="Kembali" onPress={this._backHome} />
//                                 </View>
//                                 <View style={styles.button}>
//                                     <Button title="lanjut" onPress={this._handleLanjut} />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </MainScreen>
//             );
//         }
//     }

//     Component.propTypes = {
//         navigation: PropTypes.object.isRequired
//     };


import React, { Component } from 'react';
import Quiz from '../../components/elements/Quiz';
import { StyleSheet, Image, View, Text } from 'react-native';
import Button from '../../components/elements/Button';
import Button1 from '../../components/elements/Button1';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../components/elements/StatusBar';
import { scale } from '../../utils/scaling';
import IMAGES from '../../configs/images';
import { COLOR_FONT_PURPLE } from '../../styles';


export default class Playquiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizFinish: false,
            score: 0
        };
    }
    _reset() {
        this.props.navigation.navigate('home');
    }
    _Pembahasan() {
        this.props.navigation.navigate('Pembahasan');
    }
    _onPressBack() {
        const { goBack } = this.props.navigation;
        goBack();
    }
    _quizFinish(score) {
        this.setState({ quizFinish: true, score: score });
    }
    _scoreMessage(score) {
        if (score <= 30) {
            return (
                <View style={styles.innerContainer}>
                    <View style={styles.textscore}>
                        <Text style={styles.Kuis}>Hasil Latihan</Text>
                        <Text style={styles.hsl}>Soal</Text>
                    </View>
                    <View style={styles.gambar}>
                        <Image source={IMAGES.score} resizeMode="contain" style={styles.logo} />
                    </View>
                    <Text style={styles.score}>You need to work hard</Text>
                    <Text style={styles.score}>You scored {score}%</Text>
                    <View style={styles.tombol}>
                        <View style={styles.button}>
                            <Button1 title="Lihat Pembahasan" onPress={() => this._Pembahasan()} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Halaman Menu" onPress={() => this._reset()} />
                        </View>
                    </View>
                </View>
            );
        } else if (score > 30 && score < 60) {
            return (
                <View style={styles.innerContainer}>
                    <View style={styles.textscore}>
                        <Text style={styles.Kuis}>Hasil Latihan</Text>
                        <Text style={styles.hsl}>Soal</Text>
                    </View>
                    <View style={styles.gambar}>
                        <Image source={IMAGES.score} resizeMode="contain" style={styles.logo} />
                    </View>
                    <Text style={styles.score}>You are good</Text>
                    <Text style={styles.score}>Congrats you scored {score}% </Text>
                    <View style={styles.tombol}>
                        <View style={styles.button}>
                            <Button1 title="Lihat Pembahasan" onPress={() => this._Pembahasan()} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Halaman Menu" onPress={() => this._reset()} />
                        </View>
                    </View>
                </View>
            );
        } else if (score >= 60) {
            return (
                <View style={styles.innerContainer}>
                    <View style={styles.textscore}>
                        <Text style={styles.Kuis}>Hasil Latihan</Text>
                        <Text style={styles.hsl}>Soal</Text>
                    </View>
                    <View style={styles.gambar}>
                        <Image source={IMAGES.score} resizeMode="contain" style={styles.logo} />
                    </View>
                    <Text style={styles.score}>You are the master</Text>
                    <Text style={styles.score}>Congrats you scored {score}% </Text>
                    <View style={styles.tombol}>
                        <View style={styles.button}>
                            <Button1 title="Lihat Pembahasan" onPress={() => this._Pembahasan()} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Halaman Menu" onPress={() => this._reset()} />
                        </View>
                    </View>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar />
                {/* <View style={styles.toolbar}>
                    <TouchableOpacity onPress={() => this._onPressBack()}><Text style={styles.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
                </View> */}

                {this.state.quizFinish ? (
                    <View style={styles.container}>
                        <View>{this._scoreMessage(this.state.score)}</View>
                    </View>
                ) : (
                        <Quiz quizFinish={score => this._quizFinish(score)} />
                    )}
                {/*  */}
            </View>
        );
    }
}
// const scoreCircleSize = 300;
const styles = StyleSheet.create({
    score: {
        color: COLOR_FONT_PURPLE,
        fontSize: 20
        // fontStyle: 'normal'
    },
    // circle: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: scoreCircleSize,
    //     height: scoreCircleSize,
    //     borderRadius: scoreCircleSize / 2,
    //     backgroundColor: 'green'
    // },
    Kuis: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        marginTop: scale(30),
        textAlign: 'center'
        // padding: scale(15)
    },
    hsl: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        // marginTop: scale(20),
        textAlign: 'center'

    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: scale(10),
        marginTop: scale(10)
        // shadowColor: 'rgba(0, 0, 0, 0.1)',
        // shadowOpacity: 0.8,
        // elevation: 6,
        // shadowOffset: { width: 1, height: 13 },
        // shadowRadius: 15,

    },
    gambar: {
        marginTop: scale(30)

    },
    logo: {
        width: 120,
        height: 200,
        alignSelf: 'center',
        padding: scale(10)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 55,
        color: '#fff',
        textAlign: 'center'
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    }
});
