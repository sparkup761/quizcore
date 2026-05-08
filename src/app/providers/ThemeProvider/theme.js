import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6a67ff',
    },
    secondary: {
      main: '#ffb300',
    },
    background: {
      default: '#050617',
      paper: 'rgba(10, 12, 32, 0.72)',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
})

