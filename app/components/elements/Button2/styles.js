import { StyleSheet } from 'react-native';

import {
  // COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_BUTTON,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_WHITE,
  COLOR_JINGGA
} from '../../../styles';

const container = {
  width: 142,
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 45,
  padding: 15,
  shadowOffset: { width: 50, height: 50 },
  shadowColor: 'black',
  shadowOpacity: 4.0,
  elevation: 6
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_JINGGA
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_BASE_BUTTON
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  text: {
    color: COLOR_WHITE
  },
  textDisabled: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  textPressed: {
    color: COLOR_WHITE
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {}
});
