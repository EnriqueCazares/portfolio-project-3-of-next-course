import { NextPageContext } from 'next';
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Post } from '@/Models/Post';
import axios, { AxiosResponse } from 'axios';

type portfolioDetailsPageProps = {
    portfolio: Post
}

const portfolioDetailsPage = ({ portfolio }: portfolioDetailsPageProps) => {

  return (
    <BaseLayout>
        <h1 style={{marginTop: '1rem'}}>{portfolio.title}</h1>
        <p style={{marginTop: '0.5rem'}}>BODY: {portfolio.body}</p>
        <p style={{marginTop: '0.5rem'}}>ID: {portfolio.id}</p>
    </BaseLayout>
  )
}

portfolioDetailsPage.getInitialProps = async (ctx: NextPageContext) => {
    
    let post: Post;

    try {
        const res: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`);
        post = res.data;
    } catch (error) {
        console.error(error);
        post = { userId: 0, id: 0, title: '', body: ''};
    }

    return { portfolio: post };
}

export default portfolioDetailsPage;