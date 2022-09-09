import Head from 'next/head';
import { Box, Container, Stack } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import CareerProfile from '../components/career/career-profile'
import CareerEducation from '../components/career/career-education'
import CareerCorp from '../components/career/career-corp'
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
      >
      <Container maxWidth={false}>
        <Stack spacing={5} sx={{ mt: 4 }}>
          <CareerProfile />
          <CareerCorp />
          <CareerEducation />
          <br/>
          <br/>
        </Stack>
      </Container>
    </Box>
  </>
);
Career.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Career;
