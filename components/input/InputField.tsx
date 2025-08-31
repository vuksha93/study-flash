import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";

import { Colors } from "@/constants/Colors";

import AntDesign from "@expo/vector-icons/AntDesign";

import { inputStyles } from "@/styles/input";
import { getRandomPlaceholder } from "@/helpers/data";

type SendMessageType = (message: {
  text: string;
  [key: string]: any;
}) => Promise<void>;

interface InputFieldProps {
  sendMessage: SendMessageType;
  messagesLength: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  sendMessage,
  messagesLength,
}) => {
  const [input, setInput] = useState("");

  const colorScheme = useColorScheme();
  const styles = inputStyles(colorScheme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log("Add button pressed")}
        >
          <AntDesign
            name="plus"
            size={24}
            color={Colors[colorScheme ?? "light"].button}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={
            messagesLength === 0 ? getRandomPlaceholder() : "Ask anything..."
          }
          placeholderTextColor={Colors[colorScheme ?? "light"].text}
          value={input}
          onChange={(e) => setInput(e.nativeEvent.text)}
          onSubmitEditing={(e) => {
            e.preventDefault();
            sendMessage({ text: input });
            setInput("");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
