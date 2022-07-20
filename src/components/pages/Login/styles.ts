import { StyleSheet} from 'react-native';
import theme from '../../../global/styles/theme';

const { colors, fontSize, metrics: { baseRadius, baseMargin, basePadding} } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  bottomContainer:{
    backgroundColor: colors.white,
    flex: 6,
    borderTopLeftRadius: baseRadius * 2,
    borderTopRightRadius: baseRadius * 2,
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: basePadding*2,
    paddingTop: basePadding* 4
  },
  loginText:{
    fontSize: fontSize.md,
    letterSpacing: 7,
    fontWeight: 'bold',
    marginBottom: baseMargin * 1.5
  },
  logoContainer: {
    flex: 4, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white, 
    fontWeight: 'bold',
    fontSize: fontSize.md,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: baseMargin * 2,
  }
})

export default styles;