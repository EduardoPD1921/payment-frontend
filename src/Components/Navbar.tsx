import React from 'react';

import {
    Navbar,
    NavSection,
    NavLogo,
    NavItemsSection,
    NavItem,
    DefaultButton
} from '../StyledComponents';

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
                <DefaultButton href="/register" borderRadius="30px" variant="contained" color="primary">Entrar</DefaultButton>
            </NavSection>
        </Navbar>
    )
}

export default Nav;