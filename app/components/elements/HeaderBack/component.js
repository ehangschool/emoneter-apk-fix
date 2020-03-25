import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BackButton from '../BackButton';
import BurgerButton from '../BurgerButton';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  _renderLeft = () => {
    const { burger, back, leftComponent, leftContainerStyle } = this.props;
    let LeftComponent = <View />;
    if (burger) {
      LeftComponent = <BurgerButton />;
    } else if (back) {
      LeftComponent = <BackButton />;
    } else if (leftComponent) {
      LeftComponent = leftComponent;
    }
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };

  _renderCenter = () => {
    const { image, centerComponent, centerContainerStyle } = this.props;
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {image ? this._renderTitle(image) : centerComponent}
      </View>
    );
  };

  render() {
    const { image } = this.props;
    return (
      <View style={styles.container}>
        {this._renderLeft()}
        <Image source={image} style={styles.icon} />
      </View>
    );
  }
}

Component.propTypes = {
  leftContainerStyle: PropTypes.object,
  centerContainerStyle: PropTypes.object,
  image: PropTypes.number,
  leftComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  centerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  burger: PropTypes.bool,
  back: PropTypes.bool
};

Component.defaultProps = {
  leftContainerStyle: {},
  centerContainerStyle: {},
  image: IMAGES.illustrator1,
  leftComponent: <View />,
  centerComponent: <View />,
  burger: false,
  back: false
};
