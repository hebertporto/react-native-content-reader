import React, { Component } from 'react'
import { View } from 'react-native'
import { AdMobBanner } from 'react-native-admob'

class Ad extends Component {
  bannerError = (error) => {
    console.log('ERROR BANNER', error)
  }

  render () {
    return (
      <View style={{flex: 1, height: 55}}>
        <AdMobBanner
          bannerSize='smartBannerPortrait'
          adUnitID='ca-app-pub-8356555649836141/6095712364'
          testDeviceID='EMULATOR'
          didFailToReceiveAdWithError={this.bannerError}
          adSize="banner"
        />
      </View>
    )
  }
}

export default Ad
