import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import { Post } from '@/Models/Post';
import Basepage from '@/components/Basepage';

type portfoliosProps = {
  posts: Post[]
}

const portfolios = ({ posts }: portfoliosProps) => {
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>i'm portfolios page</div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              ID: {post.id} <br />
              Title: {post.title} <br />
              <Link href={`/portfolios/${post.id}`}>Details Page</Link>
            </li>
          ))}
        </ul>
      </Basepage>
    </BaseLayout>
  )
}

portfolios.getInitialProps = async () => {
  let data: Post[] = [];
  try {
    const res: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    data = res.data;
  } catch (error) {
    console.error(error);
    data = [];
  }
  return { posts: data.slice(0,10) };
  
}

export default portfolios;