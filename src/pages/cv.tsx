import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';

type Props = {}

const cv = (props: Props) => {
  return (
    <BaseLayout className=''>
        <Basepage className=''>
          <div>i'm cv page</div>
        </Basepage>
    </BaseLayout>
  )
}

export default cv;