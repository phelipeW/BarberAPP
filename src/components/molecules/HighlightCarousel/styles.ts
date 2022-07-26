import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

const { metrics , colors } = theme;

const styles = StyleSheet.create({
  paginationDot: {
    width: 9,
    height: 9
  },
  image: {
    borderRadius: metrics.baseRadius * 2,
  }
});

export default styles;
