import { Navigation } from 'react-native-navigation'
// import { Provider } from 'react-redux'
import { registerScreens } from './screens'

// import { createStore } from '../config/redux'

// const store = createStore()

// registerScreens(store, Provider)
registerScreens()

const initialScreen = {
  screen: {
    screen: 'snr.home',
    title: 'Super Novel Reader'
  }
}

export function startApp () {
  Navigation.startSingleScreenApp(initialScreen)
}
