import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';
import withAuth from '../hoc/withAuth';
type Props = {};

const Secret = (props: Props) => {
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>i'm Secret page</div>
        </Basepage>
    </BaseLayout>
  )
};

export default withAuth(Secret);