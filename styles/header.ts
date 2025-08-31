import { Colors } from "@/constants/Colors";
import { ColorSchemeName, StyleSheet } from "react-native";

export const headerStyles = (colorSchema: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 48,
      paddingHorizontal: 16,
    },
    titleContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 4,
    },
    text: {
      color: Colors[colorSchema ?? "light"].text,
      fontWeight: 700,
    },
    lightTextContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    lightText: {
      color: Colors[colorSchema ?? "light"].text,
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 8,
    },
  });
