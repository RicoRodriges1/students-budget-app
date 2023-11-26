import { Box, Typography } from "@mui/material";
import { CustomButton, CustomTextField } from "./CustomMUIComponents";
import React from "react";
import { useStoreContext } from "../Context";



export default function Auth() {
  const { setIsAuthorized} = useStoreContext();
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleClick = () => {
    if(login === "testLogin22" && password === "s#dDA23@44#Ds") {
      setIsAuthorized(true)
    }
    else alert("Невірний логін або пароль.")
  }


  return <Box sx={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      width: "100%", 
      height: "100vh", 
    }}>
      <Box>
        <Typography variant="h5" textAlign={"center"}>
          Увійдіть в систему
        </Typography>
        <CustomTextField
          fullWidth
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{ mt: 2 }}
        />
        <CustomTextField
          fullWidth
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 2 }}
        />
        <CustomButton variant="contained" size="large" fullWidth sx={{ mt: 4 }} onClick={() => handleClick()}>
          Увійти
        </CustomButton>
      </Box>
  </Box>
}