import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';

type BasepageProps = {
    children: ReactNode;
    className: string
};

const Basepage = ({ children, className = '' }: BasepageProps) => {
  return (
    <div className={`base-page ${className}`}>
        <Container>
            {children}
        </Container>
    </div>
  )
};

export default Basepage;