import useSWR from 'swr';
import axios from 'axios';
const fetcher = (url : string) => axios.get(url).then(res => {
  const result = res.data;

  if(res.status !== 200) {
    return Promise.reject(result);
  } else {
    return result;
  }
});

export const useGetPosts = () => {
  return useSWR('/api/v1/posts', fetcher);
}

export const useGetPostById = (id: string) => {
  return useSWR(id ? `/api/v1/posts/${id}`: null, fetcher);
}