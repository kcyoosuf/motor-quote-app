import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default function NotFound() {
  return (
    <Box component="main">
      <h2>Uh oh..!</h2>
      <Typography variant="h4"> 404 - Page Not Found</Typography>
    </Box>
  );
}
