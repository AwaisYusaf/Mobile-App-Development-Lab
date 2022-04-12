import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../api/AppContext";
function TodoItem(props) {
  const { state, dispatch } = useContext(AppContext);
  function handleLongPress() {
    dispatch({ type: "DELETE", payload: props.id });
  }
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
        <Text style={styles.text} numberOfLines={1} numberOfWords={5}>
          {props.text}
        </Text>
        <Text style={styles.time}>{props.time}</Text>
      </TouchableOpacity>
      <View style={styles.hr}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "0px",
    paddingBottom: 15,
    padding: 5,
  },
  text: {
    color: "white",
    width: "50%",
  },
  time: {
    color: "gray",
    fontSize: 10,
  },
  hr: {
    width: "90%",
    height: "2px",
    borderWidth: 1,
    borderBottomColor: "white",
    borderStyle: "solid",
  },
});
export default TodoItem;
