import * as React from 'react';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
  Avatar,
  Grid,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const messages = [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: new Date().toDateString(),
  },
  {
    id: 2,
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good`,
    person: new Date().toDateString(),
  },
  {
    id: 3,
    primary: 'Recipe to try',
    secondary:
      'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: new Date().toDateString(),
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary:
      'My appointment for the doctor was rescheduled for next Saturday.',
    person: new Date().toDateString(),
  },
  {
    id: 6,
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: new Date().toDateString(),
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: new Date().toDateString(),
  },
];

const InboxBox = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '2px' }} className='sidebar__root'>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: '10px 15px',
            backgroundColor: '#dadada',
            mb: '10px',
          }}
        >
          <Grid sx={{ mr: '15px' }}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </Grid>
          <Grid>
            <Typography variant='h5' gutterBottom component='p'>
              Md Monirul Islam
            </Typography>
          </Grid>
        </Grid>

        <Grid
          sx={{
            mb: 2,
            height: '70vh',
            overflowY: 'scroll',
            p: '0 10px 2px 10px',
          }}
          className='scrollBar'
          container
        >
          <Grid item xs={12}>
            {messages.map(({ id, primary, secondary, person }, index) => {
              if (index % 2 === 0) {
                return (
                  <Grid
                    key={id}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: '15px',
                    }}
                    container
                    spacing={2}
                  >
                    <Grid item xs={11} sm={8} md={6}>
                      <Typography
                        variant='p'
                        component='p'
                        gutterBottom
                        sx={{
                          textAlign: 'left',
                          bgcolor: '#1976d2b8',
                          p: '5px 10px',
                          borderRadius: '5px',
                          minHeight: '50px',
                        }}
                      >
                        {secondary}
                      </Typography>
                      <div>{person}</div>
                    </Grid>
                  </Grid>
                );
              }
              return (
                <Grid
                  key={id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mb: '15px',
                  }}
                  container
                  spacing={2}
                >
                  <Grid item xs={11} sm={8} md={6}>
                    <Typography
                      variant='p'
                      component='p'
                      gutterBottom
                      sx={{
                        textAlign: 'right',
                        bgcolor: '#dadada',
                        p: '5px 10px',
                        borderRadius: '5px',
                        minHeight: '50px',
                      }}
                    >
                      {secondary}
                    </Typography>
                    <Typography
                      variant='p'
                      component='p'
                      gutterBottom
                      sx={{
                        textAlign: 'right',
                      }}
                    >
                      {person}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Paper>
      <AppBar
        position='relative'
        sx={{ top: 'auto', bottom: 0, bgcolor: '#dadada' }}
      >
        <Toolbar>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item sx={{ flex: '1' }}>
              <TextField id='standard-basic' variant='standard' fullWidth />
            </Grid>
            <Grid item>
              <SendIcon sx={{ width: '30px', ml: '10px', color: '#357ae8' }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default InboxBox;