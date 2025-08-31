import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";

import { Colors } from "@/constants/Colors";

import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { headerStyles } from "@/styles/header";

export const Header = () => {
  const colorScheme = useColorScheme();
  const styles = headerStyles(colorScheme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("Menu clicked")}
        style={styles.titleContainer}
      >
        <MaterialIcons
          name="short-text"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
        />
        <Text style={styles.text}>ChatGPT</Text>
        <View style={styles.lightTextContainer}>
          <Text style={styles.lightText}>5</Text>
          <Entypo
            name="chevron-small-right"
            color={Colors[colorScheme ?? "light"].text}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => console.log("New")}>
          <FontAwesome
            name="pencil-square-o"
            size={20}
            color={Colors[colorScheme ?? "light"].text}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Open")}>
          <Entypo
            name="dots-three-horizontal"
            size={20}
            color={Colors[colorScheme ?? "light"].text}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
