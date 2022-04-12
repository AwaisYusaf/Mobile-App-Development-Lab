import React, { useContext } from "react";
import { AppContext } from "../api/AppContext";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
function AddTodo({ navigation }) {
  const { state, dispatch } = useContext(AppContext);
  const [text, setText] = React.useState("");
  console.log(dispatch);
  function handlePress() {
    dispatch({ type: "ADD", payload: text });
    navigation.navigate("Homepage");
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your task here..."
        style={styles.input}
        numberOfLines={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
        <Text style={{ color: "white", textTransform: "uppercase" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
  },
  input: {
    color: "white",
    fontSize: "20px",
    wordWrap: "break-word",
    wordBreak: "break-all",
    paddingBottom: "50%",
    width: "100vw",
    border: "none",
  },
  addBtn: {
    backgroundColor: "blue",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
});
export default AddTodo;
