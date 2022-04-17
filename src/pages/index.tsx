import React, { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';

import HomeTemplate from 'components/templates/Home';
import Layout from 'components/templates/Layout';

const Home: NextPageWithLayout = () => {
  return <HomeTemplate />;
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
