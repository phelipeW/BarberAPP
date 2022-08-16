import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

const {
  colors,
  fontSize,
  metrics: { baseRadius, baseMargin, basePadding },
} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  dateContainer: {
    backgroundColor: colors.background,
    borderRadius: baseRadius * 10,
    padding: basePadding / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: baseMargin / 2,
    paddingRight: basePadding * 1.5,
    maxHeight: 40,
  },
  dayContainer: {
    backgroundColor: colors.info,
    borderRadius: baseRadius * 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: basePadding * 2,
  },
});

export default styles;
