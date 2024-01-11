import { createTheme } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  typography,
  overrides: {
    MuiTextField: {
      root: {
        '& .MuiInputBase': {
          "& .MuiOutlinedInput":{
            color: 'red !important', // Your desired color here
          }
         
        },
      },
    },
  },
  palette: {
    Primary: {
        main: "#898989",
        dark: "#de0d0d",
        light: "#de0d0d",
      },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#de0d0d",
    },
    success:{
      main:'#2e7d32'
    }
  },
 
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#86FF00', // Change this to the desired border color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
                backgroundImage:"linear-gradient(to right, #ff67cb 0%,#ffcc67 51%,#ff67cb)",
                borderRadius:'40px',
                backgroundSize:'200% auto',
                color:'#ffff',
                padding:'15px 30px',
            }),
            ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
                
              color: '#fff',
              borderRadius:'20px',
              textTransform:'none'
            }),
            
        }),
      },
    },
  },
});
