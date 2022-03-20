import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";

export default function LearnScrollView() {
  let posts = [];

  for (let i = 1; i <= 20; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`,
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {posts.map((post, idx) => (
          <View style={styles.box} key={idx}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: 25,
  },
  scroll: {
    backgroundColor: "#c2b8a3",
    padding: 10,
  },
  box: {
    backgroundColor: "#fef7dc",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
};
