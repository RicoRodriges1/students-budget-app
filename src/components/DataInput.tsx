import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AmountInput } from './AmountInput';
import { Box, Dialog, Divider, Typography } from '@mui/material';
import { CustomButton } from './CustomMUIComponents';
import { useStoreContext } from '../Context';
import {observer} from 'mobx-react-lite'

export type StorageItem = {
  date: string,
  profit: string,
  loss: string
}

export const DataInput = observer(() => {
  const {store} = useStoreContext();
  const storage = store.Months;
  

  const [date, setDate] = React.useState<dayjs.Dayjs | null>(dayjs());
  const [profit, setProfit] = React.useState("");
  const [loss, setLoss] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [food, setFood] = React.useState("");
  const [transport, setTransport] = React.useState("");
  const [housing, setHousing] = React.useState("");
  const [other, setOther] = React.useState("");



  const handleSave = () => {
    if(profit || loss) {
      console.log(storage, store.Months)
      const inStorage = storage.find((item: StorageItem) => item.date === date!.format('MM/YYYY'))
      if(inStorage) {
        store.setMonths(storage.map((item: StorageItem) => (item.date === date!.format('MM/YYYY') ? { date: item.date, profit: profit, loss: loss} : item)));
      } else {
        store.setMonths([...storage, {date: date!.format('MM/YYYY'), profit: profit, loss: loss}])
      }
    } else alert("Введіть дохід або витрати")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveLoss = () => {
    setLoss(`${Number(food) + Number(transport) + Number(housing) + Number(other)}`);
    handleClose();
  }

  return <Box sx={{
    width: "100%",
    height: "100vh",
    display: "flex"
  }}>
    <Box sx={{ width: "50%" }}>
      <Box sx={{
        height: "33%",
        backgroundColor: "#fff9eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Typography variant='h2' fontFamily={"Circularpro book, sans-serif"} sx={{ mb: 5 }}>
          Оберіть місяць
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label={'Дата'} 
            views={['month', 'year']} 
            value={date}
            onChange={(newDate) => setDate(newDate)}
            sx={{ 
              width: "320px",
              '& .MuiInput-underline:after': {
              borderBottomColor: '#7047EB',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#0a0a2e29',
                },
                '&:hover fieldset': {
                  borderColor: '#0a0a2e29',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#7047EB',
                },
                borderRadius: "8px",
              },
              '& label.Mui-focused': {
                color: '#7047EB'
              }
          }}
          />
        </LocalizationProvider>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          height: "67vh",
          backgroundColor: "#dff8ea",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Typography variant='h2' fontFamily={"Circularpro book, sans-serif"} sx={{mb: 5}}>
          Введіть дохід
        </Typography>
        <AmountInput  
          value={profit} 
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setProfit(event.target.value)} 
          label={"Дохід"}
          width="320px"
          />
      </Box>
    </Box>
    <Box sx={{ width: "50%" }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          height: "67vh",
          backgroundColor: "#fdddf8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Typography variant='h2' fontFamily={"Circularpro book, sans-serif"} sx={{mb: 5}}>
          Введіть витрати
        </Typography>
        <AmountInput 
          value={loss} 
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setLoss(event.target.value)} 
          label={"Витрати"}
          width="320px"
        />
        <CustomButton variant="contained" size="large" sx={{ height: "56px", width: "320px", mt: 5 }} onClick={handleClickOpen} >
          Розділити на категорії
        </CustomButton>
        <Dialog onClose={handleClose} open={open}>
          <Box sx={{
            p:5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
            <Typography variant='h4' fontFamily={"Circularpro book, sans-serif"} sx={{mb: 3}}>
              Категорії витрат
            </Typography>
            <AmountInput 
              value={food} 
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setFood(event.target.value)} 
              label={"Харчування"}
              width="320px"
            />
            <Divider sx={{ my: 1 }}/>
            <AmountInput 
              value={transport} 
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setTransport(event.target.value)} 
              label={"Транспорт"}
              width="320px"
            />
            <Divider sx={{ my: 1 }}/>
            <AmountInput 
              value={housing} 
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setHousing(event.target.value)} 
              label={"Житло"}
              width="320px"
            />
            <Divider sx={{ my: 1 }}/>
            <AmountInput 
              value={other} 
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setOther(event.target.value)} 
              label={"Інше"}
              width="320px"
            />
            <Divider sx={{ my: 1 }}/>
            <CustomButton variant="contained" size="large" sx={{ height: "56px", width: "320px" }} onClick={handleSaveLoss} >
              Зберегти
            </CustomButton>
          </Box>
        </Dialog>
      </Box>
      <Box sx={{
        height: "33vh",
        backgroundColor: "#f0faff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <CustomButton variant="contained" size="large" sx={{ height: "56px", width: "320px" }} onClick={() => handleSave()}>
          Зберегти
        </CustomButton>
      </Box>
    </Box>
  </Box>
})

