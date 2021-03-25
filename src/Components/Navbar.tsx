import React from 'react';

import {
    Navbar,
    NavSection,
    NavLogo,
    NavItemsSection,
    NavItem,
    LoginButton
} from '../StyledComponents'

const Nav: React.FC = () => {
    return (
        <Navbar>
            <NavSection>
                <NavLogo href="/">{"{logo}"}</NavLogo>
            </NavSection>
            <NavItemsSection>
                <NavItem href="/">payload</NavItem>
                <NavItem href="/">payload</NavItem>
                <NavItem href="/">payload</NavItem>
            </NavItemsSection>
            <NavSection>
                <LoginButton variant="contained" color="primary">Entrar</LoginButton>
            </NavSection>
        </Navbar>
    )
}

export default Nav;