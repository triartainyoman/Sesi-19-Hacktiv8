import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import LearnScrollView from "./LearnScrollView";
import Box from "./Box";
import HandleTextInput from "./HandleTextInput";
import LearnFlatList from "./LearnFlatList";
import Scroll from "./Scroll";
import Title from "./Title";

export default function App() {
  return (
    // <Scroll />
    // <Box />
    // <Title />
    // <HandleTextInput />
    // <LearnScrollView />
    <LearnFlatList />
  );
}

const styles = {};
