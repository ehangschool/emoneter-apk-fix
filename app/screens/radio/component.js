/* eslint-disable no-undef */
import React from 'react';
import { View, ToastAndroid, Text, TouchableOpacity } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import MATERI_STRING from '../../../assets/strings';
import styles from './styles';
import Button from '../../components/elements/Button';
import Button1 from '../../components/elements/Button1';


const hobbies = [
    // { label: 'Teasing', value: 0 },
    // { label: 'Catching plate', value: 1 },
    { label: 'Soaking in the mud', value: 2 }
];

export default class Component extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.Pertanyaan}>
                        <Text style={styles.soal}>{MATERI_STRING.LATIAN_SOAL}</Text>
                    </View>
                </View>
                <View style={styles.pilihan}>
                    <TouchableOpacity>
                        <RadioForm
                            radio_props={hobbies}
                            initial={2}
                            onPress={value => {
                                ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
                            }}
                            buttonSize={18}
                            buttonOuterSize={18}
                            selectedButtonColor="green"
                            selectedLabelColor="green"
                            labelStyle={{ fontSize: 20 }}
                            disabled={false}
                            formHorizontal={false}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.pilihan}>
                    <TouchableOpacity>
                        <RadioForm
                            radio_props={hobbies}
                            initial={2}
                            onPress={value => {
                                ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
                            }}
                            buttonSize={18}
                            buttonOuterSize={18}
                            selectedButtonColor="green"
                            selectedLabelColor="green"
                            labelStyle={{ fontSize: 20 }}
                            disabled={false}
                            formHorizontal={false}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.klik}>
                    <View style={styles.button}>
                        <Button title="Kembali" onPress={this._kembali} />
                    </View>
                    <View style={styles.button1}>
                        <Button1 title="Submit" onPress={this._handleSubmit} />
                    </View>
                </View>
            </View>
        );
    }
}
