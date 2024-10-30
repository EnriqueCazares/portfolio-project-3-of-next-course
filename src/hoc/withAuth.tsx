import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';

type Props = {};

const withAuth = (WrappedComponent: ComponentType) => {
    const ProtectedComponent = (props: Props) => {
        const { user, isLoading } = useUser();
        const router = useRouter();

        useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/api/auth/login');
        }
        }, [user, isLoading, router]);

        if (isLoading || !user) {
        return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };

    return ProtectedComponent;
};

export default withAuth;
