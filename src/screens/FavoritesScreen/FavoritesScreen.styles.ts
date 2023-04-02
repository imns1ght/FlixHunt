import { colors, theme } from '~/styles'

const styles = {
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  tabBar: {
    backgroundColor: theme.colors.background,
    pressColor: colors.darkGray,
  },
  tabBarIndicator: {
    backgroundColor: colors.primary,
  },
}

export default styles
