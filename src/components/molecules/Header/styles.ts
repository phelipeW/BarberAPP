import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.transparent,
    marginTop: Constants.statusBarHeight*1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.metrics.basePadding*2,
    paddingBottom: theme.metrics.basePadding
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: "center",
    alignSelf: 'center',
  },
  rightContainer: {
    justifyContent: "center",
    alignSelf: 'flex-end',
  },
  leftText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  }
});

export default styles;
