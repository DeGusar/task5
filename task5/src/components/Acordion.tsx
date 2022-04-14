import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReplyIcon from '@mui/icons-material/Reply';

export function Acordion({ subject, date, from, messageText }) {
  return (
    <Accordion sx={{ width: '100%', background: 'white', color: '#202124' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle2" sx={{ width: '10%' }}>
          from: {from}
        </Typography>
        <Typography variant="subtitle2" sx={{ flexGrow: 1, ml: '5%' }}>
          Subject: {subject}
        </Typography>
        <Typography variant="subtitle2" sx={{ width: '5', mr: '2%' }}>
          {date}
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails
        sx={{ padding: 2, flexWrap: 'nowrap', display: 'flex', alignItems: 'center' }}
      >
        <Typography>{messageText}</Typography>
        <Button
          variant="text"
          size="small"
          sx={{ ml: 5, textTransform: 'none' }}
          startIcon={<ReplyIcon />}
        >
          Reply
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}
