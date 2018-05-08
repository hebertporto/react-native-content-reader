import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createStore } from '../config/redux'

import { registerScreens } from './screens'
import { HOME_SCREEN } from './routes'

const store = createStore()

registerScreens(store, Provider)

const initialScreen = {
  screen: HOME_SCREEN,
  animationType: 'fade'
}

export function startApp () {
  Navigation.startSingleScreenApp(initialScreen)
}
