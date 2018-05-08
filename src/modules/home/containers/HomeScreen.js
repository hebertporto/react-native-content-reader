import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { NOVEL_SCREEN } from '../../../navigation/routes'

class HomeContainer extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit',
        disabled: false,
        disableIconTint: true,
        showAsAction: 'ifRoom',
        buttonColor: 'blue',
        buttonFontSize: 14,
        buttonFontWeight: '600'
      }
    ],
    leftButtons: [
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

  componentDidMount = () => {
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'edit') {
        console.log('### alert ###')
      }
      if (event.id === 'login') {
        console.log('### alert ###')
      }
    }
  }

  click = () => {
    return this.props.navigator.push(NOVEL_SCREEN)
  }

  render () {
    return (
      <View>
        <Text>Sou Home Screen com component</Text>
        <Button
          onPress={this.click}
          title="Novel"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
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
