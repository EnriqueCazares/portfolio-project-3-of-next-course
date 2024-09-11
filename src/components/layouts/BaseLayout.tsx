import React, { ReactNode } from 'react';
import Header from "@/components/shared/Header";

type BaseLayoutProps = {
    children: ReactNode
}

const BaseLayout = ({children} : BaseLayoutProps) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default BaseLayout