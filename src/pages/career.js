import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
//import { Career } from '../__mocks__/Career';

const Career = () => (
  <>
    <Head>
      <title>
        Career
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
Career.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Career;
