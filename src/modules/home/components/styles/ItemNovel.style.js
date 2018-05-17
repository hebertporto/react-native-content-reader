import {
  Dimensions,
  StyleSheet
} from 'react-native'
import { Fonts } from '../../../../constants/fonts'

const { width, height } = Dimensions.get('window')
const cols = 3
const rows = 3

export const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  title: {
    ...Fonts.style.description,
    marginTop: 4
  },
  genre: {
    ...Fonts.style.description,
    lineHeight: 14
  }
})
