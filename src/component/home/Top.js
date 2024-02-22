import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';
const Top = () => {

    <Box
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', backgroundColor: "burlywood" }}
    >
    </Box>
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };

    return (
        <div>
            <h1 className='text-6xl bg-slate-400 text-gray-600'>A Legacy Of Excellence In Providing The Best Companies</h1>
            <div >
                <div >

                    <Card sx={{ minWidth: 150 }} color="text.secondary" className="bg-blue-200 grid grid-cols-2 gap-4"  >
                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                30 Lacs
                            </Typography>
                            <Typography variant="h5" color="text.secondary" component="div">
                                Highest Package
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                4 lacs
                            </Typography>
                            <Typography variant="h5" component="div" color="text.secondary" >
                                Average Package
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                20,000+
                            </Typography>
                            <Typography variant="h5" component="div" color="text.secondary">
                                Students Placed
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                2,500+
                            </Typography>
                            <Typography variant="h5" component="div" color="text.secondary">
                                Annual Student Placements
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                2,000+
                            </Typography>
                            <Typography variant="h5" component="div">
                                Recruiting Companies
                            </Typography>
                        </CardContent>
                        <List sx={style} aria-label="mailbox folders">
                            <ListItem>
                                <ListItemText primary="Carreer Development And Training" />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemText primary="Industry Collaboration For Upskilling" />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem>
                                <ListItemText primary="Campus Drive And Interview Training" />
                            </ListItem>
                        </List>
                    </Card>

                    {/* list questions */}

                </div>
            </div>
        </div>
    )
}

export default Top