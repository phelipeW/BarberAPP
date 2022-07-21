import { StyleSheet} from 'react-native';
import theme from '../../../global/styles/theme';

const { colors, fontSize, metrics: { baseRadius, baseMargin, basePadding} } = theme;

const styles = StyleSheet.create({
  upperContainer:{
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    padding: basePadding
  },
  barbarText: {
    color: colors.white,
    fontSize: fontSize.hg,
    fontWeight: 'bold',
    marginBottom: baseMargin
  }
})

export default styles;