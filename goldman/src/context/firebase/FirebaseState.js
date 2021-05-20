import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { FirebaseReducer } from "./firebaseReducer";
// idea state child have  support context
export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
};
