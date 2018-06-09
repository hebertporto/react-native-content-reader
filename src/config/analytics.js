import {
  GoogleAnalyticsTracker
} from 'react-native-google-analytics-bridge'

const googleTracker = new GoogleAnalyticsTracker('UA-108439790-1')

export const viewTracker = (screen) => googleTracker.trackScreenView(screen)
