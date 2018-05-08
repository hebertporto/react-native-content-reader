import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class NovelContainer extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'aa',
        id: 'aa',
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only.
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
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
