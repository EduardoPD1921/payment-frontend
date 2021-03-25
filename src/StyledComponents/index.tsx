import styled from 'styled-components';

// interface Props {
//     height?: string;
// }

// export const StyledButton = styled(Button)`
//     height: ${(props: Props) => props.height || '20px'};
// `;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
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