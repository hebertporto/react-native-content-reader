import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const boxWidth = width - 80
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    width: boxWidth,
    height: 1000,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: '#fff',
    marginTop: 180
  },
  imageContainer: {
    height: 200,
    width: 150,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: -50
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  }
})
