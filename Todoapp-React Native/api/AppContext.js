import { useReducer, createContext } from "react";
import TodoReducer from "./TodoReducer";
const data = [];
export const AppContext = createContext(data);
export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, data);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
