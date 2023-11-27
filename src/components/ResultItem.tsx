import React from "react";
import { StorageItem } from "./DataInput";
import { Typography, Dialog, DialogTitle, Divider, DialogContent, Box, Button } from "@mui/material";
import { CustomButton } from "./CustomMUIComponents";
import { AmountInput } from "./AmountInput";
import { useStoreContext } from "../Context";
import { observer } from "mobx-react-lite";

type ResultItemProps = {
  item: StorageItem,
  index: number
}

export const ResultItem = observer((props: ResultItemProps) => {
  const {item, index} = props;

  const {store} = useStoreContext();
  const storage = store.months;

  console.log(JSON.stringify(item))

  const [open, setOpen] = React.useState(false);
  const [profit, setProfit] = React.useState(item.profit);
  const [loss, setLoss] = React.useState(item.loss);
  const [date] = React.useState(item.date);

  React.useEffect(() => {
    setProfit(item.profit);
    setLoss(item.loss);
  },[item])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    store.setMonths(storage.filter((item: StorageItem) => item.date !== date));
    handleClose();
  }

  const handleSave = () => {
    store.setMonths(storage.map((item: StorageItem) => (item.date === date ? { date: date, profit: profit, loss: loss} : item)));
    handleClose();
  }

  return <>
    <Divider />
    <Button 
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        py: 3,
        color: "black"
      }} 
      onClick={handleClickOpen}
    >
      <Typography sx={{ width: "10%", fontSize: "14px", color: "#7047EB", textAlign: "left" }}>
      {index + 1}
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px", textAlign: "left" }}>
      {item.date}
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px", textAlign: "left" }}>
      {item.profit} ₴
      </Typography>
      <Typography sx={{ width: "30%", fontSize: "26px", textAlign: "left" }}>
      {item.loss} ₴
      </Typography>
    </Button>
    <Dialog onClose={handleClose} open={open}>
        <DialogTitle textAlign={"center"}>Редагування</DialogTitle>
        <Divider />
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <AmountInput  value={profit} onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setProfit(event.target.value)} label={"Дохід"}/>
            <Divider sx={{ my: 1 }}/>
            <AmountInput  value={loss} onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setLoss(event.target.value)} label={"Витрати"}/>
          </Box>
          
          <Box sx={{ display: "flex", mt: 2 }}>
            <CustomButton variant="contained" onClick={handleDelete}>
              Видалити
            </CustomButton>
            <CustomButton variant="contained" onClick={handleSave} sx={{ml: "auto"}}>
              Зберегти
            </CustomButton>
          </Box>

        </DialogContent>
      </Dialog>
  </>
})