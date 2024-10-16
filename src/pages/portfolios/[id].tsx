import { useRouter } from 'next/router';
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Post } from '@/Models/Post';
import Basepage from '@/components/Basepage';
import { useGetPostById } from '@/actions';

type portfolioDetailsPageProps = {
    portfolio: Post
}

const PortfolioDetailsPage = ({ portfolio }: portfolioDetailsPageProps) => {
    const router = useRouter();
    const { data, error, isLoading } = useGetPostById(router.query.id);
    portfolio = data;

  return (
    <BaseLayout className=''>
        <Basepage className=''>
            {   isLoading && 
                <p>Loading data ...</p>
            }
            {   error ? <div className='alert alert-danger'>{error.message}</div> :
                portfolio &&
                <>
                    <h1 style={{marginTop: '1rem'}}>{portfolio.title}</h1>
                    <p style={{marginTop: '0.5rem'}}>BODY: {portfolio.body}</p>
                    <p style={{marginTop: '0.5rem'}}>ID: {portfolio.id}</p>
                </>
            }
            
        </Basepage>
    </BaseLayout>
  )
};

export default PortfolioDetailsPage;