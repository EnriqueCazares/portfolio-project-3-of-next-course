import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

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

const LoginLink = () => <span className='nav-link port-navbar-link clickable'>Login</span>;

const LogoutLink = () => <span className='nav-link port-navbar-link clickable'>Logout</span>;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
                <LoginLink />
            </NavItem>
            <NavItem className="port-navbar-item">
                <LogoutLink />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;