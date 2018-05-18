import React from 'react'
import { ImageBackground, Text } from 'react-native'

const Novel = () => {
  return (
    <ImageBackground
      source={{ uri: 'http://res.cloudinary.com/dwvrdf3zg/image/upload/v1510765331/gnoadvlyv9t9zv4h2ery.png' }}
      style={{width: '100%', height: '100%'}}
    >
      <Text>Novel</Text>
    </ImageBackground>
  )
}

export default Novel
