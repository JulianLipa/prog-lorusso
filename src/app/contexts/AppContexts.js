"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [test, setTest] = useState([]);
  
  return (
    <AppContext.Provider
      value={{
        test,
        setTest
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;