import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default function (ComposedComponent) {
  class VideoReward extends Component {
    showAdvertising = () => {
      return true
    }
    render () {
      return this.showAdvertising
        ? <ComposedComponent {...this.props} />
        : (
          <View>
            <Text>Reward</Text>
          </View>
        )
    }
  }
  return VideoReward
}
