import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { Divider, Drawer } from '@mui/material';
import { LeftSideMenu } from './components/LeftSideMenu';
import { Emails } from './components/Emails';
import { Box } from '@mui/system';

function App() {
  return (
    <Grid container spacing={0} sx={{ width: '100vw', height: '100vh' }}>
      <LeftSideMenu
        array={[
          { isOnline: true, avatarName: 'Denis' },
          { isOnline: false, avatarName: 'Dmitriy' },
        ]}
      />
      <Divider orientation="vertical" flexItem />
      <Emails />
      {/* <Drawer
        sx={{
          bottom: '20px',
          right: '20px',
          left: 'none',
        }}
        anchor="bottom"
        open={true}
        onClose={() => {}}
      >
        <Box sx={{ width: '500px', height: '500px' }}></Box>
      </Drawer> */}
    </Grid>
  );
}

export default App;
