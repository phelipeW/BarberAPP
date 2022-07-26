import { StyleSheet} from 'react-native';
import theme from '../../../global/styles/theme';

const { colors, fontSize, metrics: { baseRadius, baseMargin, basePadding} } = theme;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
  },
  bottomContainer:{
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: basePadding * 3,
    position: 'absolute',
    width: "100%",
    top: -60
  },
  iconContainer: {
    borderRadius: baseRadius * 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: basePadding
  },
  title: {
    fontSize: fontSize.xhg,
    fontWeight: 'bold',
    color: colors.white,
    paddingLeft: basePadding*2,
    marginTop: baseMargin
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: baseMargin,
  },
  itemTabContainer:{
    borderBottomWidth: 1,
    flex: 5,
    paddingBottom: basePadding,
    paddingHorizontal: basePadding*2
  },
  highLightText: {
    color: colors.white,
    fontSize: fontSize.lg,
    paddingLeft: basePadding * 2,
    marginBottom: baseMargin / 2
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: baseRadius / 2,
    padding: basePadding /2 
  }
})

export default styles;