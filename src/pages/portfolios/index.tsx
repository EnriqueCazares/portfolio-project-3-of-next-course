import React from 'react';
import Link from 'next/link';

import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';
import { Post } from '@/Models/Post';

import { useGetPosts } from '@/actions';

const Portfolios = () => {
  const { data, error, isLoading } = useGetPosts();
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>im portfolios page</div>
        { isLoading &&
          <p>Loading data ...</p>
        }
        { error ? <div className='alert alert-danger'>Error al cargar los Posts</div> : data &&
          <ul>
            {data.map((post: Post) => (
              <li key={post.id}>
                ID: {post.id} <br />
                Title: {post.title} <br />
                <Link href={`/portfolios/${post.id}`}>Details Page</Link>
              </li>
            ))}
          </ul>

        }
      </Basepage>
    </BaseLayout>
  )
};

export default Portfolios;