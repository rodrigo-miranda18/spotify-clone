import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './../_app';

import Layout from 'components/templates/Layout';

const Playlists: NextPageWithLayout = () => {
  return <div>Hello World</div>;
};

Playlists.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Playlists;
