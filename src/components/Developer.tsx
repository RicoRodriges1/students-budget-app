import { Box, Typography } from "@mui/material";


export default function Developer() {


  return <Box id="developer" sx={{ 
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100vh"
   }}>
    <Box sx={{ width: "50%", backgroundColor: "#feecfb", height: "100%"  }}>
      <img
        style={{ maxWidth: "100%", height: "auto"}}
        src="developer.jpg" 
        alt="developer"
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
        Інформація про розробника
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
        Ім'я: Горянін Володимир
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
        Досвід роботи: в 2021 році почав самостійно вивчати Python, згодом JavaScript та React, з 2021 року по серпень 2022 мав декілька фріланс-замовлень(лендінг; копія сайту для арбітражної команди; скрипт для web, який обробляє headers), в серпні влаштовуюсь в skin-trading стартап VShard на посаду Junior React Developer, 
        Розробка 
        інтерфейсу web-scraping системи для Steam
        (додавання облікових записів, проксі та інших об'єктів до
        системи,
        відображення результатів порівняння цін на
        екран у вигляді
        таблиці, фільтри та сортування результатів).
        Створення багаторазових та унікальних компонентів для
        додатку.
        Розробка веб-додатку від початкового дизайну
        з Figma
        до повного завершення.
        Брав участь у код рев'ю.
        Bug fixing.
        Співпрацював із Senior для ідентифікації та вирішення performance питань
        Технічний стек: ReactJS, Typescript, Material UI.
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
          HTML/CSS: MaterialUI, pure CSS. JavaScript: ES6, OOP, Axios, Fetch, Experience with: Next, Nest, Jest,Electron. TypeScript: Partial, omit, Record, writing types and interfaces, enum, instanceof , typeof. React: Redux, rtk, Context, Hooks, Router, API. Others: Git, Figma, Miro, Trello, Clockify. Experience with C++, Python, MySQL.
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
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7105130220008960000/">LinkedIn</a>
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
          <a href="https://github.com/RicoRodriges1?tab=repositories">Github</a>
      </Typography>
    </Box>
  </Box>
}