import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import login from '../screens/login';
import register from '../screens/register';
import SplashScreen from '../screens/SplashScreen';
import Materi from '../screens/Materi';
import quiz from '../screens/quiz';
import Fiskal from '../screens/Fiskal';
import AboutScreen from '../screens/AboutScreen';
import AboutProfileScreen from '../screens/AboutProfileScreen';
import LatianEnd from '../screens/LatianEnd';
import lembaga from '../screens/lembaga';
import Latian from '../screens/Latian';
import Latian2 from '../screens/Latian2';
import Latian3 from '../screens/Latian3';
import Latian4 from '../screens/Latian4';
import Latian5 from '../screens/Latian5';
import Latian6 from '../screens/Latian6';
import Latian7 from '../screens/Latian7';
import Latian8 from '../screens/Latian8';
import Daftar from '../screens/Daftar';
import RefrensiScreen from '../screens/RefrensiScreen';
import KebMoneter from '../screens/KebMoneter';
import Score from '../screens/Score';
import Pembahasan from '../screens/Pembahasan';
import bahas from '../screens/bahas';
import radio from '../screens/radio';
import QuizScreen from '../screens/QuizScreen';
import Opening from '../screens/Opening';
import homeSc from '../screens/homeSc';
import sessionScreen from '../screens/sessionScreen';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    quiz: {
      screen: quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Opening: {
      screen: Opening,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    }

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const homeScStack = StackNavigator(
  {
    homeSc: {
      screen: homeSc,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const sessionStack = StackNavigator(
  {
    homeSc: {
      screen: homeSc,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const PembahasanStack = StackNavigator(
  {
    Pembahasan: {
      screen: Pembahasan,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const BahasStack = StackNavigator(
  {
    bahas: {
      screen: bahas,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const QuizSCStack = StackNavigator(
  {
    QuizScreen: {
      screen: QuizScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const KebMoneterStack = StackNavigator(
  {
    KebMoneter: {
      screen: KebMoneter,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const RadioStack = StackNavigator(
  {
    radio: {
      screen: radio,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const FiskalStack = StackNavigator(
  {
    Fiskal: {
      screen: Fiskal,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const LatianStack = StackNavigator(
  {
    Latian4: {
      screen: Latian4,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Pembahasan: {
      screen: Pembahasan,
      navigationOptions: {
        tabBarVisible: false
      }
    },


  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const LembagaStack = StackNavigator(
  {
    lembaga: {
      screen: lembaga,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
export const ScoreStack = StackNavigator(
  {
    Score: {
      screen: Score,
      navigationOptions: {
        tabBarVisible: false
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);
// export const quizStack = StackNavigator(
//   {
//     quiz: {
//       screen: quiz,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     },
//   },
//   { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
// );



export const MateriStack = StackNavigator(
  {
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },

  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

// export const Bab1Moneterstack = StackNavigator(
//   {
//     Bab1Moneter: {
//       screen: Bab1Moneter,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     }
//   },

//   { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
// );

export const Splashstack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    }
  },

  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AboutStack = StackNavigator(
  {
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    RefrensiScreen: {
      screen: RefrensiScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    AboutProfileScreen: {
      screen: AboutProfileScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },

  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

// export const AboutProfileStack = StackNavigator(
//   {
//     AboutProfileScreen: {
//       screen: AboutProfileScreen,
//       navigationOptions: {
//         tabBarVisible: true
//       }
//     }
//   },

//   { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
// );

export const RegisterStack = StackNavigator(
  {
    register: {
      screen: register,
      navigationOptions: {
        tabBarVisible: true
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const Authstack = StackNavigator(
  {
    login: {
      screen: login,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Daftar: {
      screen: Daftar,
      navigationOptions: {
        tabBarVisible: true
      }
    },

  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);


export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
