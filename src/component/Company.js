import React from 'react'
import facebook from "../images/facebook.svg"
import airbnb from "../images/airbnb.svg"
import youtube from "../images/youtube.svg"
import snapchat from "../images/snapchat.svg"
import messenger from "../images/messenger.svg"
import slack from "../images/slack.svg"
import netflix from "../images/netflix.svg"
import google from "../images/google.svg"
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Company() {
  const cards = [
    { image: facebook, title: 'Facebook', text: 'Facebook...', },
    { image: google, title: 'Google', text: 'Google....',},
    { image: youtube, title: 'Youtube', text: 'Google....'},
    { image: snapchat, title: 'SnapChat', text: 'Google....' },
    
  ];
  return (
    <div>
    <h1 className='text-gray-600 text-6xl bold underline bg-slate-400' >Know About The Best Companies Visited Here!</h1>
    <Grid container spacing={6} mt={2}>
      {cards.map((card) => (
        <Grid item xs={6} md={4} lg={3} key={card.title}>
          <Card sx={{ maxWidth: 330 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={card.image}
              title={card.title}
            />
            <CardContent className=''>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.text}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">
               Learn More
                </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
    
  );
}
// const Company = () => {
//   return (
//     <div>Company</div>
//   )
// }

// export default Company