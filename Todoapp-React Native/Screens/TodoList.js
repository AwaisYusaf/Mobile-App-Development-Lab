import React, { useContext } from "react";
import TodoItem from "../Components/TodoItem";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { AppContext } from "../api/AppContext";
function AddTodo({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.addBtn}
      onPress={() => navigation.navigate("AddTodo")}
    >
      <Text style={styles.btnText}>+</Text>
    </TouchableOpacity>
  );
}

function TodoList({ navigation }) {
  const { state, dispatch } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", width: "100%", textAlign: "center" }}>
        Long Press to Delete Todo
      </Text>
      <ScrollView style={styles.scrollList}>
        {state.map((obj, index) => (
          <TodoItem key={index} text={obj.text} time={obj.time} id={index} />
        ))}
      </ScrollView>
      <AddTodo navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    position: "relative",
  },
  scrollList: {
    marginTop: 10,
  },
  addBtn: {
    backgroundColor: "blue",
    position: "absolute",
    width: "60px",
    height: "60px",
    display: "flex",
    right: 20,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    zIndex: 10,
  },
  btnText: {
    color: "white",
    fontSize: 55,
    marginBottom: "10px",
  },
});

export default TodoList;
