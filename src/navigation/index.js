import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createStore } from '../config/redux'

import { registerScreens } from './screens'

import {
  navigatorStyleNovels,
  navigatorStyleFavoritos,
  navigatorStyleOffline,
  appStyleMain
} from './styles/navigation.style'

const store = createStore()

registerScreens(store, Provider)

export function startApp () {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Novels',
        screen: 'snr.home',
        icon: require('../assets/icons/interface.png'),
        title: 'Super Novel Reader',
        navigatorStyle: navigatorStyleNovels
      },
      {
        label: 'Favoritos',
        screen: 'snr.novel',
        icon: require('../assets/icons/star.png'),
        title: 'Favoritos',
        navigatorStyle: navigatorStyleFavoritos
      },
      {
        label: 'Offline',
        screen: 'snr.novel',
        icon: require('../assets/icons/download.png'),
        title: 'Capítulos Offline',
        navigatorStyle: navigatorStyleOffline
      }
    ],
    appStyle: appStyleMain,
    animationType: 'fade'
  })
}

// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One', // tab label as appears under the icon in iOS (optional)
//       screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
//       icon: require('../img/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
//       selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
//       iconInsets: { // add this to change icon position (optional, iOS only).
//         top: 6, // optional, default is 0.
//         left: 0, // optional, default is 0.
//         bottom: -6, // optional, default is 0.
//         right: 0 // optional, default is 0.
//       },
//       title: 'Screen One', // title of the screen as appears in the nav bar (optional)
//       titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
//       navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
//       navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
//     },
//     {
//       label: 'Two',
//       screen: 'example.SecondTabScreen',
//       icon: require('../img/two.png'),
//       selectedIcon: require('../img/two_selected.png'),
//       title: 'Screen Two'
//     }
//   ],
// appStyle: {
//   orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
//   bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
//   bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
//   backButtonImage: require('./pathToImage.png') // Change the back button default arrow image with provided image. iOS only
//   hideBackButtonTitle: true/false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
// },
//   passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
//   animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
// });
