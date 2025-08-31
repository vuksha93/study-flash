import React from "react";
import { View, TouchableOpacity } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";

import { Colors } from "@/constants/Colors";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { messageStyles } from "@/styles/message";

export const IconsContainer = () => {
  const colorScheme = useColorScheme();
  const styles = messageStyles(colorScheme);

  return (
    <View style={styles.iconsContainer}>
      <TouchableOpacity>
        <AntDesign
          name="like2"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign
          name="dislike2"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="copy"
          size={24}
          color={Colors[colorScheme ?? "light"].text}
        />
      </TouchableOpacity>
    </View>
  );
};
