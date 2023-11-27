import { Box, Typography } from "@mui/material";



export default function ResultHeader() {

  return <>
    <Box sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      my: 3
    }}>
      <Typography sx={{ width: "10%", fontSize: "14px", color: "#7047EB" }}>
        №
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px" }}>
      Дата
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px" }}>
      Прибуток
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px" }}>
      Витрати
      </Typography>
    </Box>
  </>
}