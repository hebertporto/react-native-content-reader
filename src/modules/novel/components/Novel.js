import React, { Component } from 'react'
import {RkButton} from 'react-native-ui-kitten'

import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  Animated
} from 'react-native'
import Divider from '../../shared/components/Divider'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './styles/Novel.style.js'
import ChapterList from './ChapterList'

class Novel extends Component {
  state = {
    fadeAnim: new Animated.Value(0.3),
    hideFullDescription: true,
    description: '',
    novel: {
      _id: '',
      author: '',
      cover_url: '',
      name: '',
      translation_team: '',
      description: ''
    },
    textToogle: 'VER MAIS'
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500
      }
    ).start()
    this.setNovel(this.props.novel)
  }

  setNovel = async (novel) => {
    await this.setState({novel})
    this.renderDescription()
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log('component novel', nextProps)
  // }

  toogleText = async () => {
    await this.setState((prevState) => {
      return { hideFullDescription: !prevState.hideFullDescription }
    })
    this.renderDescription()
  }

  renderDescription = async () => {
    const description = this.state.novel.description

    if (this.state.hideFullDescription) {
      await this.setState({
        description: `${description.slice(0, 100)}...`,
        textToogle: 'VER MAIS'
      })
      return
    }
    await this.setState({
      description,
      textToogle: 'VER MENOS'
    })
  }

  render () {
    const { name, cover_url, translation_team, author } = this.state.novel
    // console.log('this.state', this.state)
    return (
      <ImageBackground
        source={{ uri: cover_url }}
        style={styles.containerImageBackground}
      >
        <View style={{width: '100%'}}>
          <Icon name="arrow-back" size={30} style={{color: 'white'}}/>
        </View>
        <ScrollView>
          <Animated.View style={[styles.imageCardContainer, {opacity: this.state.fadeAnim}]}>
            <View style={styles.imageBox}>
              <Image
                style={styles.image}
                source={{
                  uri: cover_url }}
              />
            </View>
          </Animated.View>
          <View style={styles.bodyContainer}>
            <View style={styles.bodyContent}>
              <Text style={styles.title}>
                {name}
              </Text>
            </View>

            <Divider />

            <View style={styles.scanContainer}>
              <View style={styles.labelContainer}>
                <Icon name="account-circle" size={14} />
                <Text
                  style={styles.labelContainerText}
                  numberOfLines={1}>
                  {author}
                </Text>
              </View>
            </View>

            <View style={[styles.scanContainer, {marginTop: 5}]}>
              <View style={styles.labelContainer}>
                <Icon name="translate" size={14} />
                <Text style={styles.labelContainerText}>{translation_team}</Text>
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              <Text>
                {this.state.description}
              </Text>
              <View style={styles.buttonWrapper}>
                <RkButton
                  onPress={this.toogleText}
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                  rkType='icon'
                >
                  <Icon name="visibility" size={18} color='white' />
                  {this.state.textToogle}
                </RkButton>
              </View>
            </View>

            <Divider />

            <View style={{ flex: 1 }}>
              <ChapterList
                chapters={[
                  {_id: 1},
                  {_id: 2},
                  {_id: 4},
                  {_id: 6},
                  {_id: 7}]}
              />
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default Novel
