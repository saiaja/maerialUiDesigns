// Components/MuiButton.tsx
import {Stack, Button } from "@mui/material";

function MuiButton() {
  return (
    <Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant="text">TEXT</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={'row'} mt={2}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
