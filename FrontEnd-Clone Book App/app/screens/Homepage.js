import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Header from "../components/Header";
import Ebook from "../components/Ebook";
import AudioBook from "../components/AudioBook";
function Homepage() {
  const tabs = { Ebook: "ebook", AudioBook: "audiobook" };
  const [currentTab, setCurrentTab] = React.useState(tabs.Ebook);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tab}>
        <TouchableWithoutFeedback onPress={() => setCurrentTab(tabs.Ebook)}>
          <Text
            style={[
              styles.btn,
              currentTab == tabs.Ebook ? { backgroundColor: "white" } : {},
            ]}
          >
            Ebook
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentTab(tabs.AudioBook)}>
          <Text
            style={[
              styles.btn,
              currentTab == tabs.AudioBook ? { backgroundColor: "white" } : {},
            ]}
          >
            AudioBook
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.tabView}>
        {currentTab == tabs.Ebook ? <Ebook /> : <AudioBook />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  tab: {
    marginTop: "1.5em",
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#D3D3D3",
    justifyContent: "space-around",
    height: "2em",
    alignItems: "center",
    borderRadius: "7px",
    paddingRight: "2px",
    paddingLeft: "2px",
  },
  btn: {
    borderRadius: "7px",
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
    width: "100%",
    textAlign: "center",
  },
});
export default Homepage;
