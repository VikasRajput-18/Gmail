import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarisOpen] = useState(true);
  return (
    <DataContext.Provider value={{ sidebarIsOpen, setSidebarisOpen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
