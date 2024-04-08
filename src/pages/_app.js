import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from "@/styles/theme";
import { Navbar } from "@/components/navbar";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') || 'light';
    setMode(savedMode);
  }, []);

  const theme = mode === 'light' ? lightTheme : darkTheme;
  return  <ThemeProvider theme={theme}>
  <CssBaseline />
  <Component {...pageProps} />
</ThemeProvider>

}
