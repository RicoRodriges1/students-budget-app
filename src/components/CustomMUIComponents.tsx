import { styled } from '@mui/material/styles';
import { TextField, Button } from "@mui/material";

export const CustomTextField = styled(TextField)(() => ({
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
  '& .MuiOutlinedInput-input': {
    padding: "8px 16px",
  },
  lineHeight: "24px",
  fontSize: "14px",
}))

export const CustomButton = styled(Button)(() => ({
  backgroundColor: "#7047eb",
  borderRadius: "8px",
  fontWeight: 600,
  '&:hover': {
    backgroundColor: "#815ced",
  },
}))

