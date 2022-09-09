import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CareerStepperItem = (props) => {
    const {image, label, period, description} = props

    return (
        <Stack direction='row' width={{width:'100%'}} spacing={1} alignItems="flex-start">
            <Avatar
                src={image}
                variant="square"
                sx={{
                    margin:1,
                    width: '4rem', height: '4rem',
                    border: "2px solid white",
                    boxShadow: '0 0 0.3rem 0.05rem #00000022'
                }}
            />
            <Stack>
                <Stack direction='row' alignItems="center" spacing={1}>
                    <Typography variant='subtitle1'>{label}</Typography>
                    <Typography variant='subtitle2'>{period}</Typography>
                </Stack>
                <Typography variant='body2'>{description}</Typography>
            </Stack>
        </Stack>
    )
}

export default CareerStepperItem;