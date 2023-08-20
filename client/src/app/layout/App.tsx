import Catalog from '../../features/catalog/Catalog';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import { light } from '@mui/material/styles/createPalette';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
