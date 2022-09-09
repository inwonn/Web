import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CareerStepperItem from './career-item'

const steps = [
    {
        label: 'NCSoft',
        period: '~ 현재',
        image: 'img/nc.png',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'NEXON',
        period: '~ 현재',
        image: 'img/nexon.jpeg',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'NEXON RED',
        period: '~ 현재',
        image: 'img/nexon-red.png',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

const CareerCorp = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Typography variant="h5" sx={{ ml: 1 }}>경력</Typography>
            {steps.map((step) => (
                <CareerStepperItem key={step['label']} image={step['image']} label={step['label']} period={step['period']} description={step['description']} />
            ))}
        </Stack>
    );
}

export default CareerCorp;
