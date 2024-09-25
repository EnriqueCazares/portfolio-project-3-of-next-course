import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';

type Props = {}

const blogs = (props: Props) => {
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>i'm blogs page</div>
      </Basepage>
    </BaseLayout>
  )
}

export default blogs;