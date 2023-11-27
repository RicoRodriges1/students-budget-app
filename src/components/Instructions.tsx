import { Box, Typography } from "@mui/material";

export default function Instructions() {


  return <Box id="instruction" sx={{ 
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100vh",
    
   }}>
    <Box sx={{ width: "50%", backgroundColor: "#feecfb", height: "100%"  }}>
      <img
        style={{ maxWidth: "100%", height: "auto"}}
        src="instructions.jpg" 
        alt="instructions"
      />
    </Box>

    <Box sx={{ width: "50%", backgroundColor: "#feecfb", height: "100%" }}>
      <Typography 
        fontSize={"18px"} 
        fontFamily={"Inter, sans-serif"} 
        color={"#db0bb9"}
        sx={{
          mt: 5,
          mx: 10
        }}
      >
        Інструкція
      </Typography>
      <Typography 
        fontSize={"18px"} 
        fontFamily={"Inter, sans-serif"} 
        color={"#6c6c89"}
        sx={{
          mt: 10,
          mx: 10
        }}
        >
        Після авторизаціїї з'являється екран для вводу даних. Виберіть поточний місяць, вкажіть дохід та витрати, нажміть "Зберегти". Вітаю! Ви щойно додали свій перший звіт.
      </Typography>
      <Typography 
        fontSize={"18px"} 
        fontFamily={"Inter, sans-serif"} 
        color={"#6c6c89"}
        sx={{
          mt: 2,
          mx: 10
        }}
        >
        Щоб переглянути статистику по місяцям та редагувати її, горніть нижче. Перед вами загальна сума накопичення у гривні та валюті, таблиця даних, де ви можете редагувати окремо кожен запис, клацнувши по ньому, та інформаційний блок з корисними посиланнями.
      </Typography>
      <Typography 
        fontSize={"18px"} 
        fontFamily={"Inter, sans-serif"} 
        color={"#6c6c89"}
        sx={{
          mt: 2,
          mx: 10,
          mb: 10
        }}
        >
        В даному додатку використано: React, Typescript, MUI, Context, axios, dayjs, styled-components.
      </Typography>
    </Box>
  </Box>
}