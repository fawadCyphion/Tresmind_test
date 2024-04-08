import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
          main: '#2176B9',
        },
        secondary: {
          main: '#19857b',
        },
        ...(mode === 'dark' && {
          background: {
            default: '#121212',
            paper: '#424242',
          },
        }),
      },
      typography: {
        fontFamily: 'Roboto, Arial, sans-serif', 
        h1: {
          fontFamily: 'Montserrat, Arial, sans-serif',
          color:"white"
        },
        h2: {
          fontFamily: 'Montserrat, Arial, sans-serif',color:"white"
        },
        h3: {
          fontFamily: 'Montserrat, Arial, sans-serif',color:"white"
        },
        h4: {
          fontFamily: 'Montserrat, Arial, sans-serif',color:"white"
        },
        h5: {
          fontFamily: 'Montserrat, Arial, sans-serif',color:"white"
        },
        h6: {
          fontFamily: 'Montserrat, Arial, sans-serif',color:"white"
        },
        label: {
          fontFamily: 'Roboto, Arial, sans-serif',
          fontSize: '1rem', 
          fontWeight: 'normal',
        },
    }
});

export const lightTheme = createTheme(getDesignTokens('light'));
export const darkTheme = createTheme(getDesignTokens('dark'));