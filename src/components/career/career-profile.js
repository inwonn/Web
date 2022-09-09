import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Avatar, CardActionArea } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';

const CareerProfile = (props) => {
    return (
        <>
            <Card sx={{ width: '100%' }}>
                <CardActionArea>
                    <Avatar
                        sx={{
                            bgcolor: lightBlue[800], width: '4rem', height: '4rem',
                            border: "2px solid white", position: 'absolute', top: '8rem', left: '2rem',
                            borderRadius:'50%',
                            boxShadow: '0 0 0.5rem 0.2rem #00000044'
                        }}>인원</Avatar>
                    <CardMedia
                        component="img"
                        image="img/galaxy.jpg"
                        alt="green iguana"
                        sx={{ height: '10rem' }}
                    />
                    <CardContent sx={{padding:2, paddingTop:6 }}>
                        <Stack direction="row">
                            <Stack spacing={0}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Inwon Hwang
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Programmer at NCSoft
                                </Typography>
                            </Stack>
                            <Button
                                variant='contained'
                                sx={{marginLeft:'auto', marginTop: 'auto', margintRight: 0, marginBottom:0 }}
                                startIcon={<GitHubIcon/>}>
                                GitHub
                            </Button>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CareerProfile;