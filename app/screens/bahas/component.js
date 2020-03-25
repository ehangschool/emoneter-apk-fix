/* eslint-disable import/first */
import React from 'react';
import { View, ImageBackground, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import CardPeng from '../../components/elements/CardPeng';
import CardPembahasan from '../../components/elements/CardPembahasan';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import MATERI_STRING from '../../../assets/strings';
import Button from '../../components/elements/Button';
import storage from '../../utils/storage';
import axios from 'axios';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            name: '',
            loading: false,
            questions: [],

            current: 0,
            correctScore: 62.5,
            totalScore: 100,

            results: {
                score: 0,
                correctAnswers: 0
            },
            completed: false
        };
    }
    async componentDidMount() {
        this._name();
    }
    _name = async () => {
        this.setState({ isLoading: true });
        const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
        console.log('ini token', token);

        // axios.get('https://ec2-54-152-120-82.compute-1.amazonaws.com/api/me', )
        axios
            .get(`http://ec2-54-152-120-82.compute-1.amazonaws.com/api/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                console.log('ini response', res.data);

                this.setState({
                    name: res.data.name,
                    isLoading: false
                });
            })
            .catch(err => {
                this.setState({
                    isLoading: false
                });
            });
    };

    _backHome = () => {
        this.props.navigation.navigate('App');
    };
    render() {
        return (
            <MainScreen>
                <StatusBar />

                {/* <Header2 title="Our Team" setting back /> */}
                <View style={styles.mainContainer}>
                    <ImageBackground source={IMAGES.bgp} style={{ width: '100%', height: '100%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Selamat {this.state.name} !!</Text>
                            {/* <Text style={styles.score}>{this.state.results.score}</Text> */}
                        </View>
                        <View style={styles.content}>
                            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                                <Text style={styles.no}>1/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL}</Text>
                                <CardPeng bodyTitle="Kebijakan operasi pasar terbuka." />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN2}</Text>
                                </View>
                                <Text style={styles.no}>2/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL2}</Text>
                                <CardPeng bodyTitle="devaluasi nilai rupiah" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN1}</Text>
                                </View>
                                <Text style={styles.no}>3/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL3}</Text>
                                <CardPeng bodyTitle="menaikkan giro wajib minimum" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN3}</Text>
                                </View>
                                <Text style={styles.no}>4/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL4}</Text>
                                <CardPeng bodyTitle="daya beli masyarakat naik" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN4}</Text>
                                </View>
                                <Text style={styles.no}>5/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL5}</Text>
                                <CardPeng bodyTitle="jumlah uang semakin berkurang" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN5}</Text>
                                </View>
                                <Text style={styles.no}>6/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL6}</Text>
                                <CardPeng bodyTitle="Bank Sentral" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN6}</Text>
                                </View>
                                <Text style={styles.no}>7/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL7}</Text>
                                <CardPeng bodyTitle="Kebijakan Dorongan Finansial" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN7}</Text>
                                </View>
                                <Text style={styles.no}>8/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL8}</Text>
                                <CardPeng bodyTitle="kebijakan moneter kontraktif" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN8}</Text>
                                </View>
                                <Text style={styles.no}>9/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL9}</Text>
                                <CardPeng bodyTitle="Politik diskonto" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN9}</Text>
                                </View>
                                <Text style={styles.no}>10/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL10}</Text>
                                <CardPeng bodyTitle="Mengedarkan uang kertas dan uang logam" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN10}</Text>
                                </View>
                                <Text style={styles.no}>11/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL11}</Text>
                                <CardPeng bodyTitle={MATERI_STRING.jwb} />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN11}</Text>
                                </View>
                                <Text style={styles.no}>12/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL12}</Text>
                                <CardPeng bodyTitle="Kebijakan Ekspansif" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN12}</Text>
                                </View>
                                <Text style={styles.no}>13/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL13}</Text>
                                <CardPeng bodyTitle="Kebijakan Kontrantif" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN13}</Text>
                                </View>
                                <Text style={styles.no}>14/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL14}</Text>
                                <CardPeng bodyTitle="Giro Wajib Minimum" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN14}</Text>
                                </View>
                                <Text style={styles.no}>15/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL15}</Text>
                                <CardPeng bodyTitle="Tingkat Diskonto" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN15}</Text>
                                </View>
                                <Text style={styles.no}>16/16</Text>
                                <Text style={styles.soa12}>{MATERI_STRING.LATIAN_SOAL16}</Text>
                                <CardPeng bodyTitle="Operasi Pasar Terbuka" />
                                <View style={styles.hiya}>
                                    <Text style={styles.pembahasan}>{MATERI_STRING.PEMBAHASAN16}</Text>
                                </View>

                                <TouchableOpacity onPress={this._backHome}>
                                    <Image source={IMAGES.back} style={styles.back} resizeMode="contain" />
                                </TouchableOpacity>
                            </ScrollView>
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
