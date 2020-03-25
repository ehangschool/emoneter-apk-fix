import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { HomeStack, UploadPhotoStack, HistoryStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import { IMAGES } from '../configs';
import { scale, verticalScale } from '../utils/scaling';

const COLOR_DARK_GREY = '#797979';
const COLOR_BLUE = '#000000';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_BLUE}
        label={label}
        icon={tintColor === COLOR_BLUE ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 20, width: 20, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_BLUE,
    inactiveTintColor: COLOR_GREY,
    style: {
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: verticalScale(50)
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    // label: I18n.t('home'),
    stack: HomeStack,
    image: {
      // active: <Home active />,
      // inactive: <Home />
      active: <Image source={IMAGES.homeActive} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />,
      inactive: <Image source={IMAGES.homeActive} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />
    }
  },
  {
    // label: I18n.t('shop'),
    stack: UploadPhotoStack,
    image: {
      active: <Image source={IMAGES.avatar} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />,
      inactive: <Image source={IMAGES.avatar} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />
    }
  },
  {
    // label: I18n.t('account'),
    stack: HistoryStack,
    image: {
      active: <Image source={IMAGES.setting} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />,
      inactive: <Image source={IMAGES.setting} style={{ height: scale(16), width: verticalScale(16), marginTop: scale(6) }} resizeMode='contain' />
    },
    // badge: 'standard'
  }
]);

export default { AppStack };
