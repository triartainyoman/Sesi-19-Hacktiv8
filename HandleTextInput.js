import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HandleTextInput() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Masukan teks disini."
        onChangeText={(value) => setText(value)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 23 }}>The text: {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 25,
  },
  textInput: {
    height: 40,
  },
};
