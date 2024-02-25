import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
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
        <div className="bg-[#330066]">
            <h1 className='text-5xl italic font-medium  text-black-600'>A Legacy Of Excellence In Providing The Best Companies</h1>
            <hr className='bg-black'></hr>
            <div sx={{ minWidth: 150 }} className="grid grid-cols-5 gap-4"  >
                <div className="bg-[#832B00] border-2 h-36 my-4 border-black rounded-md">
                    <CardContent >
                        <Typography sx={{ fontSize: 40 }} gutterBottom>
                            30 Lacs
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div">
                            Highest Package
                        </Typography>
                    </CardContent>
                </div>
                <div className="bg-blue-400 border-2 h-36 my-4 border-black rounded-md">
                    <CardContent>
                        <Typography sx={{ fontSize: 40 }} gutterBottom>
                            4 lacs
                        </Typography>
                        <Typography variant="h5" component="div" color="text.secondary" >
                            Average Package
                        </Typography>
                    </CardContent>
                </div>
                <div className="bg-yellow-400 border-2 h-36 my-4 border-black rounded-md">
                    <CardContent>
                        <Typography sx={{ fontSize: 40 }} gutterBottom>
                            20,000+
                        </Typography>
                        <Typography variant="h5" component="div" color="text.secondary">
                            Students Placed
                        </Typography>
                    </CardContent>
                </div>
                <div className="bg-green-400 border-2 h-36 my-4 border-black rounded-md">
                    <CardContent>
                        <Typography sx={{ fontSize: 40 }} gutterBottom>
                            2,500+
                        </Typography>
                        <Typography variant="h5" component="div" color="text.secondary">
                            Annual Student
                        </Typography>
                    </CardContent>
                </div>
                <div className="bg-orange-400 border-2 h-36 my-4 border-black rounded-md">
                    <CardContent>
                        <Typography sx={{ fontSize: 40 }} gutterBottom>
                            2,000+
                        </Typography>
                        <Typography variant="h5" component="div" color="text.secondary">
                            Recruiting
                        </Typography>
                    </CardContent>
                </div>
                {/* <List sx={style} aria-label="mailbox folders">
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
                </List> */}
            </div>
        </div>
    )
}

export default Top