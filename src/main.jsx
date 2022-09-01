import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#225559',

    },
    secondary: {
      main: '#286E5E'
    },
  },
  shape: {
    borderRadius: 30
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "0.75rem",
          top: 2,
        },
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontSize: '0.7rem',
          pt: '0.6rem',
          pb: '0.6rem',
        }

      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h5',
          },
          style: {
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#225559'
          }

        },
        {
          props: {
            variant: 'h6',
          },
          style: {
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#28292C'
          }
        },
        {
          props: {
            variant: 'body1',
          },
          style: {
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#28292C'
          }

        },
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: '1rem',
            color: '#28292C'
          }

        }
      ],
    }
  }
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
  </React.StrictMode>
)


