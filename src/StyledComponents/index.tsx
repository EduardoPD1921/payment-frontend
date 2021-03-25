import styled from 'styled-components';

import Button from '@material-ui/core/Button';

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

// export const LoginButton = styled(Button)`
//     && {
//         height: 40px;
//         width: 130px;
//         font-weight: 600;
//         border-radius: 30px;
//         background: #426dff;
//         :hover {
//             background: #365ad6;
//         }
//     }
// `;

interface DefaultButtonProps {
    borderRadius: string;
    margin?: string;
}

export const DefaultButton = styled(Button)`
    && {
        height: 50px;
        width: 130px;
        color: white;
        font-weight: 600;
        margin: ${(props: DefaultButtonProps) => props.margin || '0'};
        border-radius: ${(props: DefaultButtonProps) => props.borderRadius};
        background: #426dff;
        :hover {
            background: #365ad6;
        }
    }
`;

export const HeaderSection = styled.section`
    display: flex;
    width: 100%;
    height: 200px;
    justify-content: center;
    background: #11c76f;
`;

export const SearchInput = styled.input`
    flex: 1;
    height: 50px;
    padding-left: 20px;
    border-radius: 4px;
    font-size: 20px;
    border-style: solid;
    border-color: transparent;
    :focus {
        outline: none;
    }
`;

export const HeaderInputSection = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
`;