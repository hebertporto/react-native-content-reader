import React, { Component } from 'react'
import { AdMobBanner } from 'react-native-admob'

class AdBanner extends Component {
  bannerError = (error) => {
    console.log('ERROR BANNER', error)
  }

  render () {
    return (
      <AdMobBanner
        bannerSize='smartBannerPortrait'
        adUnitID='ca-app-pub-8356555649836141/6095712364'
        testDeviceID='EMULATOR'
        didFailToReceiveAdWithError={this.bannerError}
        adSize="smartBannerPortrait"
      />
    )
  }
}

export default AdBanner
