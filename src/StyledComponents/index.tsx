import styled from 'styled-components';

import Button from '@material-ui/core/Button';

// interface Props {
//     height?: string;
// }

// export const StyledButton = styled(Button)`
//     height: ${(props: Props) => props.height || '20px'};
// `;

//Navbar components
export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 85px;
    background: #11c76f;
`;

export const NavSection = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const NavItemsSection = styled(NavSection)`
    flex: 2;
`;

export const NavLogo = styled.a`
    color: white;
    font-size: 40px;
    font-weight: 600;
    text-decoration: none;
`;

export const NavItem = styled.a`
    color: white;
    font-size: 20px;
    text-decoration: none;
    margin: 30px;
    transition: 0.5s;
    :hover {
        color: #c3e8d1;
    }
`;

export const LoginButton = styled(Button)`
    && {
        height: 40px;
        width: 130px;
        font-weight: 600;
        border-radius: 30px;
        background: #426dff;
        :hover {
            background: #365ad6;
        }
    }
`;

//Header components
// interface HeaderProps {
//     imageUrl: string;
// }

// export const Header = styled.section`
//     width: 100%;
//     background-image: ${(props: HeaderProps) => props.imageUrl || 'test'};
// `;

interface HeaderProps {
    imageUrl: string;
}

export const HeaderSection = styled.section`
    width: 100%;
    height: 500px;
    background-image: url(${(props: HeaderProps) => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;