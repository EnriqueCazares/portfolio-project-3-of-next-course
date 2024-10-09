'use client';
import { useEffect, useState } from 'react';
import { Post } from '@/Models/Post';
import axios, { AxiosResponse } from 'axios';

interface Portfolios {
    posts: Post[],
    error: unknown
}

export const useGetPosts = () => {
    const [state, setState] = useState<Portfolios>({ posts: [], error: undefined });  
    useEffect(() => {
      const getPost = async () => {
        try {
          const res: AxiosResponse = await axios.get('/api/v1/posts');
          setState({ posts: res.data, error: undefined});
          //debugger;
        } catch (error) {
            console.error('Unexpected error:', error);
            setState({ posts: [], error: error  })
          }
      };
  
      getPost();
    }, []);
  
    return state;
}