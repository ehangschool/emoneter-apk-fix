/* eslint-disable import/first */
import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import Button1 from '../../components/elements/Button1';
import Question from '../../components/elements/Question';



export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            questions: [],

            current: 0,
            correctScore: 5,
            totalScore: 50,

            results: {
                score: 0,
                correctAnswers: 0
            },
            completed: false
        };
    }

    fetchQuestions = async () => {
        await this.setState({ loading: true });
        const response = await fetch(
            `http://ec2-54-152-120-82.compute-1.amazonaws.com/api/quizArray`
        );
        const questions = await response.json();

        const results = questions;

        results.forEach(item => {
            item.id = Math.floor(Math.random() * 10000);
        });

        await this.setState({ questions: results, loading: false });
    };

    reset = () => {
        this.setState(
            {
                questions: [],
                current: 0,
                results: {
                    score: 0,
                    correctAnswers: 0
                },
                completed: false
            },
            () => {
                this.fetchQuestions();
            }
        );
    };

    submitAnswer = (index, answer) => {
        const question = this.state.questions[index];
        const isCorrect = question.correct_answer === answer;
        const results = { ...this.state.results };

        results.score = isCorrect ? results.score + 5 : results.score;
        results.correctAnswers = isCorrect
            ? results.correctAnswers + 1
            : results.correctAnswers;

        this.setState({
            current: index + 1,
            results,
            completed: index === 9 ? true : false
        });
    };

    componentDidMount() {
        this.fetchQuestions();
    }

    _backHome = () => {
        this.props.navigation.navigate('App');
    };

    _handlePembahasan = () => {
        this.props.navigation.navigate('Pembahasan');
    };


    render() {
        {
            return (
                <MainScreen>
                    <StatusBar />
                    <View style={styles.mainContainer}>
                        {!!this.state.loading && (
                            <View style={styles.loadingQuestions}>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text>Please wait while we are loading questions for you</Text>
                            </View>
                        )}
                        {!!this.state.questions.length > 0 &&
                            this.state.completed === false && (
                                <Question
                                    onSelect={answer => {
                                        this.submitAnswer(this.state.current, answer);
                                    }}
                                    question={this.state.questions[this.state.current]}
                                    correctPosition={Math.floor(Math.random() * 3)}
                                    current={this.state.current}
                                />
                            )}

                        <View
                            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                        >
                            {this.state.completed === true && (
                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.Kuis}>Hasil Latihan</Text>
                                    <Text style={styles.hsl}>Soal</Text>
                                    <View style={styles.gambar}>
                                        <Image source={IMAGES.score} resizeMode="contain" style={styles.logo} />
                                    </View>
                                    <View>
                                        <Text style={styles.Score_desc}>Selamat !!</Text>
                                        <Text>Total Score: {50}</Text>
                                        <Text style={styles.kuis_desc}>Nilaimu: {this.state.results.score}</Text>
                                        <Text style={styles.kuis_desc}>Jawaban Benar: {this.state.results.correctAnswers}</Text>
                                        <Text style={styles.kuis_desc}>
                                            Jawaban Salah: {10 - this.state.results.correctAnswers}
                                        </Text>
                                        <View style={styles.button}>
                                            <Button title="Halaman Menu" onPress={this._backHome} />
                                        </View>
                                        <View style={styles.button}>
                                            <Button1 title="Lihat Pembahasan" onPress={this._handlePembahasan} />
                                        </View>
                                    </View>
                                    <Text>Total Score: {50}</Text>
                                    <Text>Obtained Score: {this.state.results.score}</Text>

                                    <Button title="Restart Quiz" onPress={this.reset} />
                                </View>
                            )}
                        </View>

                    </View>
                </MainScreen>
            );
        }
    }
}

Component.propTypes = {
    navigation: PropTypes.object.isRequired
};
