import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./Screens/TodoList";
import AddTodo from "./Screens/AddTodo";
import { GlobalContext } from "./api/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <GlobalContext>
          <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen name="Homepage" component={TodoList} />
            <Stack.Screen name="AddTodo" component={AddTodo} />
          </Stack.Navigator>
        </GlobalContext>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
