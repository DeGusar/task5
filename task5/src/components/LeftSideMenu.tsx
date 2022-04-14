import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { AvatarOnline, AvatarOffline } from '../components/Avatars';
import { Modal } from './Modal';

export type UserType = {
  isOnline: boolean;
  userName: string;
};
type LeftMenuType = {
  array: UserType[];
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
            <Typography variant="h6">Co:</Typography>
            <Stack
              direction="column"
              spacing={3}
              justifyContent="center"
              padding={2}
              alignItems="start"
            >
              {array.map((user, i) => {
                return user.isOnline ? (
                  <AvatarOnline name={user.userName} key={i} />
                ) : (
                  <AvatarOffline name={user.userName} key={i} />
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Modal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        handleClick={() => setOpenModal(false)}
      ></Modal>
    </>
  );
}
