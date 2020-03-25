import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { COLOR_GREY, COLOR_FONT_PURPLE } from '../../styles';

import * as Animatable from 'react-native-animatable';
import { scale, moderateScale } from '../../utils/scaling';


export default class animbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }
    _onPress() {
        this.props._onPress(!this.state.status)
        this.setState({ status: !this.state.status })
        switch (this.props.effect) {
            case 'bounce':
                this.refs.view.bounce(800)
                break;
            case 'flash':
                this.refs.view.flash(800)
                break;
            case 'jello':
                this.refs.view.jello(800)
                break;
            case 'pulse':
                this.refs.view.pulse(800)
                break;
            case 'rotate':
                this.refs.view.rotate(800)
                break;
            case 'rubberBand':
                this.refs.view.rubberBand(800)
                break;
            case 'shake':
                this.refs.view.shake(800)
                break;
            case 'swing':
                this.refs.view.swing(800)
                break;
            case 'tada':
                this.refs.view.tada(800)
                break;
            case 'wobble':
                this.refs.view.wobble(800)
                break;
        }

    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this._onPress()}>
                <Animatable.View ref="view" style={{
                    margin: 5,
                    type: 'radio',
                    // backgroundColor: buttonBg,
                    justifyContent: 'center',
                    width: scale(280),
                    alignSelf: 'center',
                    borderRadius: moderateScale(30),
                    borderWidth: 0,
                    elevation: 10,
                    shadowColor: COLOR_GREY,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 6,
                    height: scale(42),
                    marginTop: scale(20),
                    backgroundColor: this.state.status ? this.props.onColor : "white", borderRadius: 20
                }}>
                    <Text style={{ color: this.state.status ? "white" : "#133375", fontWeight: "bold", textAlign: 'center', fontSize: 16 }}>{this.props.text}</Text>
                </Animatable.View>
            </TouchableWithoutFeedback>
        );
    }
}