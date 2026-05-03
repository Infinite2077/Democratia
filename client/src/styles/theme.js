import { createTheme } from "@mui/material"

let darkTheme = createTheme({
   
   
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f3ff',
      light: '#70ffff',
      dark: '#00b0ff',
    },
    secondary: {
      main: '#ff00ff',
      light: '#ff5eff',
      dark: '#c500c5',
    },
    background: {
      default: '#050505',
      paper: '#0d0d0d',
    },
    text: {
      primary: '#00f3ff',
      secondary: '#ff00ff',
    },
    divider: 'rgba(0, 243, 255, 0.2)',
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      textShadow: '0 0 10px #00f3ff',
      letterSpacing: '0.1em',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid #00f3ff',
          position: 'relative',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#00f3ff',
            color: '#000',
            boxShadow: '0 0 20px #00f3ff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(0, 243, 255, 0.3)',
          boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'rgba(0, 243, 255, 0.5)',
          },
          '&:hover fieldset': {
            borderColor: '#ff00ff !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#00f3ff !important',
            boxShadow: '0 0 10px #00f3ff',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Honk, sans-serif",
    title: "Rubik Scribble, sans-serif"
  }
});


let lightTheme = createTheme({
   palette: {
    mode: 'light',
    primary: {
      main: '#0066ff',
      light: '#3385ff',
      dark: '#0047b3',
    },
    secondary: {
      main: '#ff0055',
      light: '#ff3377',
      dark: '#b3003b',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f7f9',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#454545',
    },
    divider: 'rgba(0, 102, 255, 0.15)',
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '0.05em',
      color: '#0066ff',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 800,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '2px solid #0066ff',
          backgroundColor: 'transparent',
          color: '#0066ff',
          padding: '8px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#0066ff',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(0, 102, 255, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 102, 255, 0.2)',
          boxShadow: '10px 10px 0px rgba(0, 102, 255, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#0066ff',
          borderBottom: '1px solid #0066ff',
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#0066ff',
          color: '#fff',
          fontWeight: 'bold',
        },
        root: {
          borderColor: 'rgba(0, 102, 255, 0.1)',
        },
      },
    },
  },
})

export { darkTheme, lightTheme}