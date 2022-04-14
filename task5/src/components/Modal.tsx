import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
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
export type FormType = {
  recipient: string;
  subject: string;
  messageText: string;
};
type ModalProp = {
  isOpen: boolean;
  handleClick: ({ recipient, subject, messageText }: FormType) => void;
  handleClose: () => void;
};

export function Modal({ isOpen, handleClick, handleClose }: ModalProp) {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessage] = useState('');

  function handleSend() {
    handleClick({ recipient, subject, messageText });
    setRecipient('');
    setSubject('');
    setMessage('');
  }
  if (!isOpen) return null;
  return (
    <Box
      sx={{
        width: '600px',
        height: '500px',
        position: 'absolute',
        bottom: '0',
        zIndex: '5',
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
          <IconButton color="inherit" sx={{ marginRight: -2 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box paddingLeft={2} paddingRight={2}>
        <Input
          placeholder="Recipient"
          sx={{ marginTop: '3px' }}
          size="medium"
          fullWidth
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
          disableUnderline
        />
        <Divider />
        <Input
          placeholder="Subject"
          onChange={(event) => setSubject(event.target.value)}
          size="medium"
          value={subject}
          fullWidth
          disableUnderline
        />
        <Divider />
        <TextField
          multiline
          variant="standard"
          fullWidth
          value={messageText}
          onChange={(event) => setMessage(event.target.value)}
          rows={14}
          sx={{ height: '340px', overflow: 'hidden' }}
          InputProps={{ disableUnderline: true }}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ textTransform: 'none', width: '110px' }}
          onClick={handleSend}
          endIcon={<SendIcon sx={{ ml: 2 }} />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
