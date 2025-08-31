import { Colors } from "@/constants/Colors";
import { ColorSchemeName, StyleSheet } from "react-native";

export const messageStyles = (colorSchema: ColorSchemeName) =>
  StyleSheet.create({
    userContainer: {
      backgroundColor: Colors[colorSchema ?? "light"].input,
      padding: 8,
      marginBottom: 8,
      borderRadius: 12,
      alignSelf: "flex-end",
    },
    assistantContainer: {
      marginBottom: 8,
      padding: 8,
    },
    iconsContainer: {
      marginTop: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 24,
      columnGap: 8,
    },
  });
