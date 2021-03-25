import React from 'react';

import { Navbar, NavSection, NavItemsSection, NavLogo } from '../StyledComponents'

const Nav: React.FC = () => {
    return (
        <Navbar>
            <NavSection>
                <NavLogo href="/">{"{log}"}</NavLogo>
            </NavSection>
            <NavItemsSection></NavItemsSection>
            <NavSection></NavSection>
        </Navbar>
    )
}

export default Nav;