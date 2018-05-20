import React from 'react'
import { View } from 'react-native'

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: 40,
        flex: 1,
        marginTop: 7,
        marginBottom: 7,
        alignSelf: 'center'
      }}
    />
  )
}

export default Divider
