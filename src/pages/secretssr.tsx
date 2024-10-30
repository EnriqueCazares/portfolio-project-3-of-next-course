import React from 'react';
import { GetServerSideProps } from 'next';
import BaseLayout from '@/components/layouts/BaseLayout';
import Basepage from '@/components/Basepage';
import { getSession } from '@auth0/nextjs-auth0';
import { Session } from '@auth0/nextjs-auth0';

type Props = {
    user: Session["user"];
};

const SecretSSR = ({ user }: Props) => {
  return (
    <BaseLayout className=''>
      <Basepage className=''>
        <div>Im Secret page {user && user.name}</div>
      </Basepage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res } = context;
    const session = await getSession(req, res);

    if (!session || !session.user) {
        res.writeHead(302, {
            Location: '/api/auth/login'
        });
        res.end();
        return { props: {} };
    };

    return {
        props: {
            user: session.user
        }
    };
};

export default SecretSSR;
