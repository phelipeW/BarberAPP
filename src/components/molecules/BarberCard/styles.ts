import {  StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

const styles = StyleSheet.create({
  container:{ 
    borderRadius: 16, 
    padding: 16,
    width: '100%',
    backgroundColor: `${theme.colors.secondary}90`,
    marginBottom: theme.metrics.baseMargin * 2
  },
  image: {
    alignSelf:'center',
    width: '100%',
    height: 200,
    borderRadius: theme.metrics.baseRadius
  },
  title: {
    fontSize: theme.fontSize.hg,
    marginBottom: theme.metrics.baseMargin,
    color: theme.colors.white
  }

})

export default styles;