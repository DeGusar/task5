import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Input,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
type ModalProp = {
  isOpen: boolean;
};

export function Modal({ isOpen }: ModalProp) {
  if (!isOpen) return null;
  return (
    <Box
      sx={{
        width: '600px',
        height: '500px',
        position: 'absolute',
        bottom: '0',
        right: '20px',
        backgroundColor: 'white',
        boxShadow:
          '0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%)',
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: '#404040',
          height: '40px',
          justifyContent: 'center',
          borderRadius: '5px 5px 0 0 ',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New message
          </Typography>
          <IconButton color="inherit" sx={{ marginRight: -2 }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box paddingLeft={2} paddingRight={2}>
        <Input
          placeholder="Recipients"
          sx={{ marginTop: '3px' }}
          size="medium"
          fullWidth
          disableUnderline
        />
        <Divider />
        <Input placeholder="Subject" size="medium" fullWidth disableUnderline />
        <Divider />
        <TextField
          multiline
          variant="standard"
          fullWidth
          rows={14}
          sx={{ height: '340px', overflow: 'hidden' }}
          InputProps={{ disableUnderline: true }}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ textTransform: 'none' }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
