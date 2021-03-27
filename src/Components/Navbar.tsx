import React from 'react';

import {
    Navbar,
    NavSection,
    NavLogo,
    NavItemsSection,
    NavItem,
    DefaultButton
} from '../StyledComponents';

interface NavbarProps {
    mainPage?: boolean;
}

const Nav: React.FC<NavbarProps> = props => {
    const renderButton = () => {
        if (props.mainPage) {
            return (
                <NavSection>
                    <DefaultButton backgroundDefault="#426dff" backgroundHover="#365ad6" href="/register" borderRadius="30px" variant="contained" color="primary">Entrar</DefaultButton>
                </NavSection>
            )
        }
    }

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
            {renderButton()}
        </Navbar>
    )
}

export default Nav;