import { Auth } from "./components/Auth";
import { useStoreContext } from "./Context";
import  { DataInput }  from "./components/DataInput"
import { Result } from "./components/Result";
import Instructions from "./components/Instructions";
import Developer from "./components/Developer";
import { observer } from 'mobx-react-lite'

export const App = observer(() => {
  const { store } = useStoreContext();
    

  return <>
      {store.authorized ? <>
        <DataInput />
        <Result />
        <Instructions />
        <Developer />
      </> : <Auth />}
  </>
  
})


