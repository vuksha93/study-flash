import { Colors } from "@/constants/Colors";
import { ColorSchemeName, StyleSheet } from "react-native";

export const inputStyles = (colorSchema: ColorSchemeName) =>
  StyleSheet.create({
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 8,
      paddingHorizontal: 8,
    },
    input: {
      height: 40,
      backgroundColor: Colors[colorSchema ?? "light"].input,
      borderRadius: 6,
      paddingHorizontal: 8,
      flex: 1,
      color: Colors[colorSchema ?? "light"].text,
    },
    addButton: {
      backgroundColor: Colors[colorSchema ?? "light"].buttonContainer,
      borderRadius: 40,
      padding: 8,
    },
  });
