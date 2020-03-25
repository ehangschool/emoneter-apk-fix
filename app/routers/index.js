import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, Authstack, HomeStack, Splashstack, AboutStack, PembahasanStack, MateriStack, RegisterStack, KebMoneterStack, FiskalStack, LembagaStack, LatianStack, homeScStack, QuizSCStack, ScoreStack, RadioStack, BahasStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Fiskal: FiskalStack,
    login: Authstack,
    register: RegisterStack,
    home: HomeStack,
    materi: MateriStack,
    SplashScreen: Splashstack,
    AboutScreen: AboutStack,
    lembaga: LembagaStack,
    radio: RadioStack,
    KebMoneter: KebMoneterStack,
    Opening: LatianStack,
    score: ScoreStack,
    homeSc: homeScStack,
    QuizScreen: QuizSCStack,
    Pembahasan: PembahasanStack,
    bahas: BahasStack,
    App: Drawer
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
