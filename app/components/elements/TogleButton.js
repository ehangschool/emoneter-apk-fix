import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { scale, moderateScale } from '../../utils/scaling';
import { COLOR_GREY } from '../../styles';


export default class TogleButton extends React.Component {
    state = {
        toggle: true
    };
    _onPress() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState });
    }
    render() {
        const { textvalue } = this.props;
        const { toggle } = this.state;
        const buttonBg = toggle ? 'white' : 'purple';
        const textColor = toggle ? 'blue' : 'white';
        return (
            <TouchableOpacity
                onPress={() => this._onPress()}
                style={{
                    margin: 10,
                    type: 'radio',
                    backgroundColor: buttonBg,
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
                    marginTop: scale(20)
                }}
            >
                <Text style={{ color: textColor, textAlign: 'center', fontSize: 16 }}>{textvalue}</Text>
            </TouchableOpacity>
        );
    }
}
TogleButton.propTypes = {
    textvalue: PropTypes.string
};

TogleButton.defaultProps = {
    textvalue: ''
};
