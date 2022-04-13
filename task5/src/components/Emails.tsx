import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, Box } from '@mui/material';
import { Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Acordion } from './Acordion';

export function Emails() {
  return (
    <Grid item flexGrow={1} sx={{ height: '100%', background: 'rgba(242,245,245,0.8)' }}>
      <Stack direction={'column'} alignItems="flex-start" justifyContent="flex-start" spacing={0}>
        <Acordion />
        <Acordion />
      </Stack>
    </Grid>
  );
}
