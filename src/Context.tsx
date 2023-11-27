import { createContext, useContext, useState } from "react";
import RootStore from "./models/months"
import { observer } from "mobx-react-lite";

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

export const StoreContextProvider = observer((props: IProviderProps) => {
  const [storage, setStorage] = useState([]);
  const store = RootStore.create({
    authorized: false,
    months: [{
      date: "11/2023",
      profit: "100",
      loss: "20"
    }]
  })
  

  

  return <StoreContext.Provider value={{storage, setStorage, store}}>
    {props.children}
  </StoreContext.Provider>
})