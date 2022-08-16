import { StyleSheet} from 'react-native';
import theme from '../../../global/styles/theme';

const { colors, fontSize, metrics: { baseRadius, baseMargin, basePadding} } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  barbarContainer:{
    flexDirection: 'row',
    padding: basePadding * 2,
    marginHorizontal: baseMargin,
    borderRadius: baseRadius,
    marginVertical: baseMargin
  },
  background: {
    borderRadius: baseRadius/2,
    padding: basePadding,
    opacity: 0.7
  },
  name:{
    fontSize: fontSize.lg,
    color: colors.white,
    marginTop: baseMargin,
    fontWeight: "bold"
  },
})

export default styles;