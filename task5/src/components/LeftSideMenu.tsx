import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { AvatarOnline, AvatarOffline } from '../components/Avatars';
import { Modal } from './Modal';

type userType = {
  isOnline: boolean;
  avatarName: string;
};
type LeftMenuType = {
  array: userType[];
};

export function LeftSideMenu({ array }: LeftMenuType) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Grid item xs={2} sx={{ height: '100%' }}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          padding={2}
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Button
            sx={{ width: '50%' }}
            variant="contained"
            size="large"
            onClick={() => setOpenModal(true)}
            startIcon={<EmailIcon />}
          >
            Compose
          </Button>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Typography variant="h6">Contacts:</Typography>
            <Stack
              direction="column"
              spacing={3}
              justifyContent="center"
              padding={2}
              alignItems="start"
            >
              {array.map((user) => {
                return user.isOnline ? (
                  <AvatarOnline name={user.avatarName} />
                ) : (
                  <AvatarOffline name={user.avatarName} />
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Modal isOpen={openModal}></Modal>
    </>
  );
}
