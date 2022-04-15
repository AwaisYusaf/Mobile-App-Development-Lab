import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
function Ebook() {
  return (
    <View style={styles.container}>
      <View style={styles.booksContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book1.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book2.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book3.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book4.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book5.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book6.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: require("../assets/images/book7.jpg") }}
            style={styles.book}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "20px",
    justifyContent: "center",
  },
  book: {
    width: "45vw",
    height: "30vh",
    margin: 5,
    borderRadius: "12px",
  },
});

export default Ebook;
