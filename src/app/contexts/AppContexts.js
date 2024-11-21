"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [filter, setFilter] = useState([]);

  const addFavourite = (data) => {
    if (!favourites.some((favourite) => favourite._id === data._id)) {
      setFavourites([...favourites, data]);
    }
  };
  
  return (
    <AppContext.Provider
      value={{
        favourites,
        setFavourites,
        filter,
        setFilter,
        addFavourite
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