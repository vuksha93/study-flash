import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 8,
  },
  contentContainer: {
    paddingBottom: Dimensions.get("screen").height,
  },
});
