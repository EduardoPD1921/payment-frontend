import React from 'react';
import Cookie from 'js-cookie';

import SideMenu from './SideMenu';

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
        const cookieToken = Cookie.get('authToken');
        const sessionToken = sessionStorage.getItem('authToken');

        if (cookieToken || sessionToken) {
            return <SideMenu />
        }

        if (props.mainPage) {
            return (
                <NavSection>
                    <DefaultButton 
                        backgroundDefault="#426dff" 
                        backgroundHover="#365ad6" 
                        href="/register" 
                        borderRadius="30px" 
                        variant="contained" 
                        color="primary"
                    >
                        Entrar
                    </DefaultButton>
                </NavSection>
            )
        }
    }

    return (
        <Navbar>
            <NavSection>
                <NavLogo color="white" href="/">{"{logo}"}</NavLogo>
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