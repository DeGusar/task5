import React from 'react';
import './App.css';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import { Divider, Button, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { Acordion } from './components/Acordion';
import { Login } from './components/Login';
import { UserType } from './components/LeftSideMenu';
import { AvatarOnline, AvatarOffline } from './components/Avatars';
import { Modal } from './components/Modal';
import date from 'date-and-time';

function App() {
  const [isSignin, setSignin] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUsername] = useState('');
  const [users, setUsers] = useState<UserType[]>([]);
  function connect(user) {
    const socket = new WebSocket('wss://task5-5.herokuapp.com/');
    socket.onopen = () => {
      socket.send(JSON.stringify(user));
    };
    socket.onmessage = (even) => {
      const message = JSON.parse(even.data);
      const { event } = message[0] || message;
      switch (event) {
        case 'connection':
          setUsers((prev) => message);
          break;
        case 'message':
          setMessages((prev) => [message, ...prev]);
          break;
      }
    };
  }

  return !isSignin ? (
    <Login
      clickLogin={(userName) => {
        setSignin(true);
        setUsername(userName);
        const userMessage = {
          event: 'connection',
          userName: userName,
          isOnline: true,
        };
        connect(userMessage);
      }}
    />
  ) : (
    <Grid container spacing={0} sx={{ width: '100vw', height: '100vh' }}>
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
                {users.map((user, i) => {
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
          handleClose={() => {
            setOpenModal(false);
          }}
          handleClick={(messageForm) => {
            connect({
              ...messageForm,
              ...{ date: Date.now() },
              ...{ event: 'message' },
              ...{ from: userName },
            });
            setOpenModal(false);
          }}
        ></Modal>
      </>
      <Divider orientation="vertical" flexItem />
      <Grid item flexGrow={1} sx={{ height: '100%', background: 'rgba(242,245,245,0.8)' }}>
        <Stack direction={'column'} alignItems="flex-start" justifyContent="flex-start" spacing={0}>
          {messages.map((message, i) => {
            return (
              <Acordion
                messageText={message.messageText}
                date={date.format(new Date(message.date), 'HH:mm:ss')}
                subject={message.subject}
                from={message.from}
                key={i}
              />
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
