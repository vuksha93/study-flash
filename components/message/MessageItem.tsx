import React, { useState } from "react";
import { View, Text } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme.web";

import { IconsContainer } from "./IconsContainer";

import { Colors } from "@/constants/Colors";
import { messageStyles } from "@/styles/message";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  parts: Array<
    { type: "text"; text: string } | { type: string; [key: string]: any }
  >;
};

export const MessageItem = ({ message }: { message: Message }) => {
  const colorScheme = useColorScheme();
  const styles = messageStyles(colorScheme);

  const [liked, setLiked] = useState(false);

  return (
    <View
      style={
        message.role === "user"
          ? styles.userContainer
          : styles.assistantContainer
      }
    >
      {message.parts.map((part, i) => {
        switch (part.type) {
          case "text":
            return (
              <View key={`${message.id}-${i}`}>
                <Text
                  style={{
                    color: Colors[colorScheme ?? "light"].text,
                  }}
                >
                  {part.text}
                </Text>
                {message.role === "assistant" && <IconsContainer />}
              </View>
            );
          case "tool-weather":
            return (
              <Text
                style={{
                  color: Colors[colorScheme ?? "light"].text,
                }}
                key={`${message.id}-${i}`}
              >
                {JSON.stringify(part, null, 2)}
              </Text>
            );
        }
      })}
    </View>
  );
};
