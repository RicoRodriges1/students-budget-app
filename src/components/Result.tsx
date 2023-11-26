import { Typography, Box, Divider } from "@mui/material";
import React from "react";
import { useStoreContext } from '../Context';
import { StorageItem } from "./DataInput";
import ResultItem from "./ResultItem";
import axios from "axios";
import ResultHeader from "./ResultHeader";

type Currency = {
  "r030": number,
  "txt": string,
  "rate": number,
  "cc": string,
  "exchangedate": string
}

export default function Result() {
  const {storage, setStorage} = useStoreContext();
  const [exchangeRates, setExchangeRates] = React.useState<Currency[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        setExchangeRates(response.data.filter((currency: Currency) => currency.cc === "EUR" || currency.cc === "USD"));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAccumulation = () => {
    const totalProfit = storage.reduce((acc: number, item: StorageItem) => acc + Number(item.profit), 0);
    const totalLoss = storage.reduce((acc: number, item: StorageItem) => acc + Number(item.loss), 0);
    console.log(totalLoss, totalProfit)
    return totalProfit - totalLoss;
  }

  const accumulationToUSD = () => {
    if(exchangeRates[0]) {
      return <>{(calculateAccumulation() / Number(exchangeRates[0].rate)).toFixed(2)} {exchangeRates[0].cc}</>
    } else return <></>
  }

  const accumulationToEUR = () => {
    if(exchangeRates[0]) {
      return <>{(calculateAccumulation() / Number(exchangeRates[1].rate)).toFixed(2)} {exchangeRates[1].cc}</>
    } else return <></>
  }
  

  return <Box sx={{
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }}>
    <Box sx={{
      height: "50%",
      width: "100%",
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Box sx={{ 
        width: "50%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h2" sx={{  ml: "33%" }}>
          Наявні накопичення на зараз:
        </Typography>
      </Box>
      <Box sx={{ 
        width: "50%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column"
      }}>
        <Typography variant="h4" sx={{  mr: "33%", color: "#6c6c89" }}>
          {calculateAccumulation().toFixed(2)} ₴  
        </Typography>
        <Typography variant="h4" sx={{  mr: "33%", color: "#6c6c89" }}>
          {accumulationToUSD()}
        </Typography>
        <Typography variant="h4" sx={{  mr: "33%", color: "#6c6c89" }}>
          {accumulationToEUR()}
        </Typography>
      </Box>
    </Box>
    <Box sx={{      
      height: "50%",
      width: "100%",
    }}>
      <Box sx={{ 
        mx: "16.5%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Box sx={{ width: "100%" }}>
          <ResultHeader />
          {storage.map((item: StorageItem, index: number) => 
            <Box key={item.date}  sx={{ width: "100%" }}>
              <ResultItem item={item} index={index}/>
            </Box>
          )}
          <Divider />
        </Box>
      </Box>
    </Box>
    <Box sx={{
      width: "100%", 
      backgroundColor: "#5423e7",
      height: "35vh",
    }}>
      <Box sx={{ mx: "16.5%", my: 10 }}>
        <Typography variant={"h2"} color={"white"} mb={3}>
          Додаткова інформація
        </Typography>
        <Typography onClick={() => null} sx={{
          fontSize: "18px",
          fontFamily: "Inter, sans-serif",
          color: "#b8a4f5",
          "&:hover": {
            color: "white",
            cursor: "pointer",
            "&::after": {
              content: '" →"',
            }
          },
        }}>
          <a href="#instruction" style={{ 
            color: "#b8a4f5",
            fontSize: "18px",
            fontFamily: "Inter, sans-serif",
            textDecoration: "none"
            }}>Інструкція по користуванню додатком</a>
        </Typography>
        <Typography  onClick={() => null} sx={{
          fontSize: "18px",
          fontFamily: "Inter, sans-serif",
          color: "#b8a4f5",
          "&:hover": {
            color: "white",
            cursor: "pointer",
            "&::after": {
              content: '" →"',
            }
          },
        }}>
          <a href="#developer" style={{ 
            color: "#b8a4f5",
            fontSize: "18px",
            fontFamily: "Inter, sans-serif",
            textDecoration: "none"
            }}>Інформація про розробника</a>
        </Typography>
      </Box>

    </Box>
  </Box>
}