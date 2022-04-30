import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

import Layout from 'components/templates/Layout';

const Search: NextPageWithLayout = () => {
  return <div>Hello World</div>;
};

Search.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Search;
