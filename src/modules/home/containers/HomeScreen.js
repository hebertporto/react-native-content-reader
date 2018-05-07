import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class HomeContainer extends Component {
  componentDidMount = () => {
    console.log('### didMount Home ###')
    this.props.navigator.setStyle({
      navBarBackgroundColor: 'blue'
    })
  }

  componentWillUnmount = () => {
    console.log('### WillUnmount Home ###')
  }

  click = () => {
    return this.props.navigator.push({
      screen: 'snr.novel', // unique ID registered with Navigation.registerScreen
      title: 'Novel', // navigation bar title of the pushed screen (optional)
      subtitle: 'subtitle 2' // navigation bar subtitle of the pushed screen (optional)
    })
  }
  render () {
    return (
      <View>
        <Text>Sou Home Screen</Text>
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
