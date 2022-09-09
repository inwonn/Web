import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import GameEngine from '../components/portfolio/game-engine'
//import { Portfolio } from '../__mocks__/Portfolio';

const Portfolio = () => (
  <>
    <Head>
      <title>
        Portfolio
      </title>
    </Head>
    <GameEngine/>
  </>
);
Portfolio.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Portfolio;
