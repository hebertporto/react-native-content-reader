import React, { Component } from 'react'
import { View } from 'react-native'
import {RkButton} from 'react-native-ui-kitten'
import { AdMobRewarded } from 'react-native-admob'

export default class VideoReward extends Component {
  state = {
    showChapter: false
  }

  componentDidMount() {
    // AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId])
    AdMobRewarded.setAdUnitID('ca-app-pub-8356555649836141/6479523305')
    AdMobRewarded.addEventListener('adLoaded', () => console.log('AdMobRewarded => adLoaded'))
    AdMobRewarded.addEventListener('adFailedToLoad',
      (error) => console.warn(error)
    )
    AdMobRewarded.addEventListener('adOpened',
      () => console.log('AdMobRewarded => adOpened')
    )
    AdMobRewarded.addEventListener('videoStarted',
      () => console.log('AdMobRewarded => videoStarted')
    )
    AdMobRewarded.addEventListener('adClosed',
      () => {
        console.log('AdMobRewarded => adClosed')
        AdMobRewarded.requestAd().catch(error => console.warn(error))
      }
    )
    AdMobRewarded.addEventListener('adLeftApplication',
      () => console.log('AdMobRewarded => adLeftApplication')
    )
    AdMobRewarded.addEventListener('rewarded',
      (type, amount) => {
        console.log('rewarded', type, amount)
        this.valida()
      }
    )
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners()
  }
  valida = () => this.setState({ showChapter: true })
  showRewarded = () => {
    console.log('chamou rewarded')
    AdMobRewarded.requestAd()
      .then(() => AdMobRewarded.showAd())
      .catch(err => console.log('nao loaded ad', err))
  }
  render () {
    return this.state.showChapter
      ? this.props.chapter
      : (
        <View style={{flex: 1}}>
          <RkButton style={{width: 150, borderRadius: 25}} onPress={this.showRewarded}> VideoReward</RkButton>
        </View>
      )
  }
}
