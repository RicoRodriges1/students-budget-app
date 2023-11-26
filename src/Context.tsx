import { createContext, useContext, useState } from "react";

export interface IProviderProps {
  children: React.ReactNode
}

export const StoreContext = createContext(undefined as any);

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context)
    throw new Error("StoreContext is used out of Provider.");
  return context;
}

export function StoreContextProvider(props: IProviderProps) {
  const [storage, setStorage] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  

  return <StoreContext.Provider value={{storage, setStorage, isAuthorized, setIsAuthorized}}>
    {props.children}
  </StoreContext.Provider>
}