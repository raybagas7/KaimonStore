import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkMode: boolean;
  onChangeThemeMode: () => void;
}

export default function Header({ darkMode, onChangeThemeMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">KAIMONSTORE</Typography>
        <Switch checked={darkMode} onChange={onChangeThemeMode} />
      </Toolbar>
    </AppBar>
  );
}
