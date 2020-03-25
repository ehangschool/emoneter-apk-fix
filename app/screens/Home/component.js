/* eslint-disable react/no-unused-state */
/* eslint-disable import/first */
import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import CardItem from '../../components/elements/CardItem';
import Loading from '../../components/elements/Loading';
import MATERI_STRING from '../../../assets/strings';
// import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';
import StatusBar from '../../components/elements/StatusBar';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
// import axios from 'axios';
import Button from '../../components/elements/Button';
// import { STORAGE_KEY } from '../../configs';
// import Axios from 'axios';
// import { loading } from '../../components/layouts/MainScreen/action';
import { COLOR_BASE_PRIMARY_PURPLE } from '../../styles';
import storage from '../../utils/storage';
import axios from 'axios';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: ''
    };
  }

  async componentDidMount() {
    this._name();
  }

  _handleNavigateMateri = () => {
    this.props.navigation.navigate('Materi');
  };
  _handleNavigateLatihanSoal = () => {
    this.props.navigation.navigate('Opening');
  };
  _handlekuis = () => {
    this.props.navigation.navigate('quiz');
  };
  _handleout = () => {
    storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    this.props.navigation.navigate('login');
  };
  _handleNavigateAbout = () => {
    this.props.navigation.navigate('AboutScreen');
  };
  _handleQuiz = () => {
    this.props.navigation.navigate('Latian4');
  };
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

  render() {
    return this.state.isLoading === true ? (
      <MainScreen>
        <Loading />
      </MainScreen>
    ) : (
        <MainScreen>
          <StatusBar />
          {/* <Header2 title="Our Team" setting back /> */}
          <View style={styles.mainContainer}>
            <ImageBackground
              source={IMAGES.bgh}
              style={{ width: '100%', height: '100%', paddingTop: 0, marginTop: 0 }}
            >
              <View style={styles.content}>

                <Text style={styles.header}>
                  {MATERI_STRING.selamat} {this.state.name} !!
                </Text>
                <TouchableOpacity onPress={this._handleout}>
                  <Image source={IMAGES.logout} resizeMode="contain" style={styles.logo} />
                </TouchableOpacity>
              </View>
              <View style={styles.card}>
                <CardItem
                  image={IMAGES.materi}
                  style={styles.cardItemContainer}
                  bodyTitle="Materi"
                  move={this._handleNavigateMateri}
                  {...this.props}
                />
                <CardItem
                  image={IMAGES.kuiz}
                  style={styles.cardItemContainer2}
                  bodyTitle="Kuis"
                  bodyDesc=""
                  move={this._handlekuis}
                  {...this.props}
                />
              </View>
              <View style={styles.card2}>
                <CardItem
                  image={IMAGES.lat}
                  style={styles.cardItemContainer}
                  bodyTitle="Latihan Soal"
                  bodyDesc=""
                  move={this._handleNavigateLatihanSoal}
                  {...this.props}
                />
                <CardItem
                  image={IMAGES.kami}
                  style={styles.cardItemContainer2}
                  bodyTitle="Tentang Kami"
                  bodyDesc=""
                  move={this._handleNavigateAbout}
                  {...this.props}
                />
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
