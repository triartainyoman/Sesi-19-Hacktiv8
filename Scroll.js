import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";

export default function Scroll() {
  return (
    <ScrollView style={{ padding: 25 }}>
      <Text>Some Text!</Text>
      <View>
        <Text>Some More Text!</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "grey",
          borderWidth: 1,
        }}
        defaultValue="You can type in me."
      />
    </ScrollView>
  );
}
