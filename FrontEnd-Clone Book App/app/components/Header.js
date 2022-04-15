import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
function Header() {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: require("../assets/images/menu-icon.png") }}
          style={style.image}
        />
      </TouchableOpacity>
      <Text style={style.text}>All Books</Text>
      <TouchableOpacity>
        <Image
          source={{ uri: require("../assets/images/search-icon.png") }}
          style={style.image}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  image: {
    width: "20px",
    height: "20px",
  },
  text: {
    fontSize: "15px",
  },
});
export default Header;
