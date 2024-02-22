import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


export default function Company() {
  const cards = [
    { image: "/images/facebook.svg", title: 'Facebook', text: 'Facebook...', },
    { image: "/images/google.svg", title: 'Google', text: 'Google....', },
    { image: "/images/youtube.svg", title: 'Youtube', text: 'Google....' },
    { image: "/images/snapchat.svg", title: 'SnapChat', text: 'Google....' },

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