import React from 'react';
import Grid from '@mui/material/Grid';
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

export function Acordion() {
  return (
    <Accordion sx={{ width: '100%', background: 'rgba(242,245,245,0.8)', color: '#202124' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle2" sx={{ width: '10%' }}>
          from: USER
        </Typography>
        <Typography variant="subtitle2" sx={{ flexGrow: 1, ml: '5%' }}>
          Theme: Lorem Ipsum
        </Typography>
        <Typography variant="subtitle2" sx={{ width: '5', mr: '2%' }}>
          17:57
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails
        sx={{ padding: 2, flexWrap: 'nowrap', display: 'flex', alignItems: 'center' }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
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
