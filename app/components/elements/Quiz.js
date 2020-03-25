import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './animbutton';
import {
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_BLUE_OPACITY,
    COLOR_FONT_PURPLE,
    COLOR_GREY,
    COLOR_BASE_PRIMARY_PURPLE
} from '../../styles';
import { scale } from '../../utils/scaling';
import Button from '../../components/elements/Button';

const { width, height } = Dimensions.get('window');
let arrnew = [];
const jsonData = {
    quiz: {
        quiz1: {
            question1: {
                number: '1',
                correctoption: 'option3',
                options: {
                    option1: 'Java',
                    option2: 'PHP',
                    option3: 'Javascript',
                    option4: 'IOS'
                },
                question: 'React is a ____ library'
            },
            question2: {
                number: '2',
                correctoption: 'option4',
                options: {
                    option1: 'XML',
                    option2: 'YML',
                    option3: 'HTML',
                    option4: 'JSX'
                },
                question: '____ tag syntax is used in React'
            },
            question3: {
                number: '3',
                correctoption: 'option1',
                options: {
                    option1: 'Single root DOM node',
                    option2: 'Double root DOM node',
                    option3: 'Multiple root DOM node',
                    option4: 'None of the above'
                },
                question: 'Application built with just React usually have ____'
            },
            question4: {
                number: '4',
                correctoption: 'option2',
                options: {
                    option1: 'mutable',
                    option2: 'immutable',
                    option3: 'variable',
                    option4: 'none of the above'
                },
                question: 'React elements are ____'
            },
            question5: {
                number: '5',
                correctoption: 'option3',
                options: {
                    option1: 'functions',
                    option2: 'array',
                    option3: 'components',
                    option4: 'json data'
                },
                question: 'React allows to split UI into independent and reusable pieses of ____'
            }
        }
    }
};
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.qno = 0;
        this.score = 0;

        const jdata = jsonData.quiz.quiz1;
        arrnew = Object.keys(jdata).map(function (k) {
            return jdata[k];
        });
        this.state = {
            question: arrnew[this.qno].question,
            number: arrnew[this.qno].number,
            options: arrnew[this.qno].options,
            correctoption: arrnew[this.qno].correctoption,
            countCheck: 0
        };
    }
    prev() {
        if (this.qno > 0) {
            this.qno--;
            this.setState({
                question: arrnew[this.qno].question,
                options: arrnew[this.qno].options,
                correctoption: arrnew[this.qno].correctoption,
                number: arrnew[this.qno].number
            });
        }
    }
    next() {
        if (this.qno < arrnew.length - 1) {
            this.qno++;

            this.setState({
                countCheck: 0,
                question: arrnew[this.qno].question,
                options: arrnew[this.qno].options,
                correctoption: arrnew[this.qno].correctoption,
                number: arrnew[this.qno].number
            });
        } else {
            this.props.quizFinish((this.score * 100) / 5);
        }
    }
    _answer(status, ans) {
        if (status == true) {
            const count = this.state.countCheck + 1;
            this.setState({ countCheck: count });
            if (ans == this.state.correctoption) {
                this.score += 1;
            }
        } else {
            const count = this.state.countCheck - 1;
            this.setState({ countCheck: count });
            if (this.state.countCheck < 1 || ans == this.state.correctoption) {
                this.score -= 1;
            }
        }
    }
    render() {
        let _this = this;
        const currentOptions = this.state.options;
        const options = Object.keys(currentOptions).map(function (k) {
            return (
                <View key={k} style={{ margin: 10 }}>
                    <Animbutton
                        countCheck={_this.state.countCheck}
                        onColor={'#5F55E0'}
                        effect={'tada'}
                        _onPress={status => _this._answer(status, k)}
                        text={currentOptions[k]}
                    />
                </View>
            );
        });

        return (
            <ScrollView style={{ backgroundColor: '#F5FCFF', paddingTop: 10 }}>
                <View style={styles.container}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <View>
                            <Text style={styles.number}>{this.state.number}</Text>
                        </View>
                        <View>
                            <Text style={styles.soal}>{this.state.question}</Text>
                        </View>
                        <View style={styles.soal}>{options}</View>
                        <View style={styles.tombol}>
                            <View style={styles.button}>
                                <Button title="Kembali" onPress={() => this.prev()} />
                            </View>
                            <View style={styles.button}>
                                <Button title="lanjut" onPress={() => this.next()} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    oval: {
        width: (width * 90) / 100,
        borderRadius: 20,
        backgroundColor: 'green'
    },
    txt: {
        color: COLOR_WHITE,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    number: {
        marginTop: scale(10),
        alignSelf: 'flex-start',
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(10)
    },
    tombol: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(20)
    },
    button: {
        alignItems: 'center',
        marginTop: scale(20),
        marginBottom: scale(10),
        elevation: 10,
        padding: scale(8),
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 32 },
        shadowRadius: 6
        // backgroundColor: COLOR_BASE_PRIMARY_PURPLE
    },
    button1: {
        alignItems: 'center',
        marginTop: scale(30),
        marginBottom: scale(10),
        elevation: 10,
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 2, height: 14 },
        shadowRadius: 15
    },
    soal: {
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(20),
        marginRight: scale(10),
        paddingTop: scale(15),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        margin: 15,
        color: 'white'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
