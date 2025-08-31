import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { fetch as expoFetch } from "expo/fetch";
import { useEffect, useRef } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { generateAPIUrl } from "@/utils";

import { Header } from "@/components/header/Header";
import { InputField } from "@/components/input/InputField";
import { MessageItem } from "@/components/message/MessageItem";

import { homeStyles } from "@/styles/home";

export default function App() {
  const flatListRef = useRef<FlatList>(null);

  const { messages, error, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch,
      api: generateAPIUrl("/api/chat"),
    }),
    onError: (error) => console.error(error, "ERROR"),
  });

  useEffect(() => {
    if (messages.length > 2 && messages.length % 2 === 0) {
      const targetIndex = messages.length - 2;

      flatListRef.current?.scrollToIndex({
        animated: true,
        index: targetIndex,
        viewPosition: 0,
      });
    }
  }, [messages]);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />

      <FlatList
        contentContainerStyle={homeStyles.contentContainer}
        automaticallyAdjustKeyboardInsets
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageItem message={item} />;
        }}
      />

      <InputField messagesLength={messages.length} sendMessage={sendMessage} />
    </SafeAreaView>
  );
}
