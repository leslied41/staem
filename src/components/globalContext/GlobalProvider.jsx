import React, { createContext, useContext, useState, useMemo } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [sortTerm, setSortTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const value = useMemo(
    () => ({ sortTerm, setSortTerm, searchTerm, setSearchTerm }),
    [sortTerm, setSortTerm, searchTerm, setSearchTerm]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
