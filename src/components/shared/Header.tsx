import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

type BsNavLinkProps = {
  href: string,
  title: string
}


const BsNavLink = ({href, title}: BsNavLinkProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginLink = () => <BsNavLink href='/api/auth/login' title='Login' />;

const LogoutLink = () => <BsNavLink href='/api/auth/logout' title='Logout' />;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user, isLoading } = useUser();

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <div className='navbar-brand'>
          <Link href="/" legacyBehavior>
            <a className="port-navbar-brand">Filip Jerga</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret"/>
            </NavItem>
          </Nav>
          <Nav navbar>
            {
              !isLoading &&
              <>
                {
                  user ? 
                  <NavItem className="port-navbar-item">
                      <LogoutLink />
                  </NavItem> 
                  :
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                    
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;