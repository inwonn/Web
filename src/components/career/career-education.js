import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CareerStepperItem from './career-item'

const steps = [
    {
        label: '홍익대학교',
        period: '~ ',
        image: 'img/hongik.png',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    }
];

const CareerEducation = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Typography variant="h5" sx={{ ml: 1 }}>학력</Typography>
            {steps.map((step) => (
                <CareerStepperItem key={step['label']} image={step['image']} label={step['label']} period={step['period']} description={step['description']} />
            ))}
        </Stack>
    );
}

export default CareerEducation;
