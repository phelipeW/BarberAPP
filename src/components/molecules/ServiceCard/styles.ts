import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

const { metrics : { baseMargin , basePadding,baseRadius} , colors, fontSize } = theme;

const styles = StyleSheet.create({
  background: {
    borderRadius: baseRadius/2,
    padding: basePadding,
    opacity: 0.4
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.hg,
    color: colors.white
  },
  description:{
    marginTop: baseMargin/2,
    fontSize: fontSize.md,
    color: colors.white,
    maxWidth: '70%'
  },
  price: {
    marginTop: baseMargin/2,
    fontSize: fontSize.hg,
    color: colors.white,
    fontWeight: 'bold',
  }
});

export default styles;
