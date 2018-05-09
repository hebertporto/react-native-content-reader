import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NOVEL_SCREEN } from '../../../navigation/routes'
import { Fonts } from '../../../constants/fonts'

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
      <View style={styles.container}>
        <Text style={styles.text}>Sou Home Screen com component</Text>
        <Text style={styles.text2}>Texto com OpenSans</Text>
        <Text>Texto sem OpenSans</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: Fonts.type.kefa
  },
  text2: {
    fontFamily: Fonts.type.base
  }
})
export const HomeScreen = HomeContainer

// static navigationOptions = {
//   title: 'Home',
//   header: null
// }

// static propTypes = {
//   displayName: PropTypes.string,
//   navigation: PropTypes.object.isRequired
// }
