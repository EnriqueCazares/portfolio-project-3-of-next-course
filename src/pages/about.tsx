import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';

type Props = {};

const about = (props: Props) => {
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>i'm about page</div>
        </Basepage>
    </BaseLayout>
  )
};

export default about;