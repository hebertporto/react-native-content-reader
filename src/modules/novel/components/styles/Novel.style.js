import { StyleSheet, Dimensions } from 'react-native'
import { Fonts } from '../../../../constants/fonts'

const { width } = Dimensions.get('window')

const boxWidth = width - 70
const bottonBodyContainer = 80
const textPadding = bottonBodyContainer + 20

export const styles = StyleSheet.create({
  containerImageBackground: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageCardContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 35,
    elevation: 15
  },
  imageBox: {
    height: 250,
    width: boxWidth - 70,
    borderRadius: 10,
    borderWidth: 0
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: boxWidth,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: '#fff',
    bottom: bottonBodyContainer
  },
  bodyContent: {
    paddingTop: textPadding,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.h6,
    color: '#000',
    textAlign: 'center'
  }
})
