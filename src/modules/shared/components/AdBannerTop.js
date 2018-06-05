import React, { Component } from 'react'
import { AdMobBanner } from 'react-native-admob'

class AdBannerTop extends Component {
  bannerError = (error) => {
    console.log('ERROR BANNER', error)
  }

  render () {
    return (
      <AdMobBanner
        bannerSize='smartBannerPortrait'
        adUnitID='ca-app-pub-8356555649836141/4361271948'
        testDeviceID='EMULATOR'
        didFailToReceiveAdWithError={this.bannerError}
        adSize="smartBannerPortrait"
      />
    )
  }
}

export default AdBannerTop
