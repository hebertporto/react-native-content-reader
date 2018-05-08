import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { HOME_SCREEN } from '../../../navigation/routes'

class home extends Component {
  componentDidMount = () => {
    console.log('### didMount Home ###')
  }

  click = () => {
    return this.props.navigator.push(HOME_SCREEN)
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

export default home
