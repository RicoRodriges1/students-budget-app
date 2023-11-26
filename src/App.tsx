import Auth from "./components/Auth";
import { useStoreContext } from "./Context";
import  DataInput  from "./components/DataInput"
import Result from "./components/Result";
import { Box } from "@mui/material";
import Instructions from "./components/Instructions";
import Developer from "./components/Developer";

export default function App() {
  const {isAuthorized} = useStoreContext();
  
  return <>
      {isAuthorized ? <>
        <DataInput />
        <Result />
        <Instructions />
        <Developer />
      </> : <Auth />}

  </>
  
}


