import React, { ReactNode } from 'react';
import Header from "@/components/shared/Header";

type BaseLayoutProps = {
    children: ReactNode,
    className: string
}

const BaseLayout = ({children, className = ''} : BaseLayoutProps) => {
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout