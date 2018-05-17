import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class NovelContainer extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'aa',
        id: 'aa',
        disabled: false,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonFontSize: 14,
        buttonFontWeight: '600'
      }
    ]
  }

  click = () => {
    return this.props.navigator.push({
      screen: 'snr.home', // unique ID registered with Navigation.registerScreen
      title: 'Super Novel', // navigation bar title of the pushed screen (optional)
      subtitle: 'subtitle'
    })
  }
  render () {
    return (
      <View>
        <Text>NOVEL Screen</Text>
        <Button
          onPress={this.click}
          title="Home"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

export const NovelScreen = NovelContainer

// static navigationOptions = {
//   title: 'Home',
//   header: null
// }

// static propTypes = {
//   displayName: PropTypes.string,
//   navigation: PropTypes.object.isRequired
// }
