import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NOVEL_SCREEN } from '../../../navigation/routes'
import { Fonts } from '../../../constants/fonts'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <Text style={styles.text}>Sou Home Screen com Kefa</Text>
        <Text style={styles.text2}>Texto com SourceSans</Text>
        <Text>Font padrão </Text>
        <Icon name="rocket" size={30} color="#900" />
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
