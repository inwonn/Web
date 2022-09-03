import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
//import { Portfolio } from '../__mocks__/Portfolio';

const Portfolio = () => (
  <>
    <Head>
      <title>
        Portfolio
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    </Box>
  </>
);
Portfolio.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Portfolio;
