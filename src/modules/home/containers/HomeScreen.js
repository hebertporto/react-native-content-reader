import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'

import { NOVEL_SCREEN } from '../../../navigation/routes'

class HomeContainer extends Component {
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
        <Text style={styles.text2}>Texto com Alegreya-Regular</Text>
        <Text style={styles.text3}>Texto com SourceSansPro-Black</Text>
        <Text>Font padrão </Text>
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
  },
  text3: {
    fontFamily: Fonts.type.emphasis
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
