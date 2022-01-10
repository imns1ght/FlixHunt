import { StyleSheet } from 'react-native'
import theme from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  sectionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  grid: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  sectionTitle: {
    color: theme.colors.primary,
    fontSize: 26,
    fontWeight: 'bold',
  },
  sectionSubTitle: {
    color: theme.colors.primary,
    fontSize: 16,
    margin: 10,
  },
  loadMoreButton: {
    marginVertical: 20,
    marginHorizontal: 60,
  },
})

export default styles
