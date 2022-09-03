import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CareerResults } from '../components/career/career-results';
import { CareerToolbar } from '../components/career/career-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { careers } from '../__mocks__/careers';

const Careers = () => (
  <>
    <Head>
      <title>
        Careers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CareerToolbar />
        <Box sx={{ mt: 3 }}>
          <CareerResults careers={careers} />
        </Box>
      </Container>
    </Box>
  </>
);
Careers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Careers;
