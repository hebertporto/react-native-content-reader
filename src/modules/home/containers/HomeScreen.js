import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HomeContainer extends Component {
  render () {
    return (
      <View>
        <Text>Sou Home Screen</Text>
      </View>
    )
  }
}

export const HomeScreen = HomeContainer

// static navigationOptions = {
//   title: 'Home',
//   header: null
// }

// static propTypes = {
//   displayName: PropTypes.string,
//   navigation: PropTypes.object.isRequired
// }
