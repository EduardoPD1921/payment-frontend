import styled from 'styled-components';

import Button from '@material-ui/core/Button';

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

export const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    position: absolute;
    bottom: 0;
    background: #11c76f;
`;

export const FooterContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 70%;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: 50px;
`;

export const FooterColumnTitle = styled.span`
    color: #0C874C;
    font-size: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const FooterLogo = styled(NavLogo)`
    font-size: 30px;
`;

export const FooterColumnContent = styled(NavItem)`
    margin: 0 0 10px 0;
    font-size: 16px;
`;

export const DividerSection = styled.div`
    width: 100%;
`;

export const ExtraInfo = styled(FooterColumn)`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    align-items: center;
    padding: 0;
    width: 100%;
`;

export const ExtraInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 70%;
    color: white;
`;

export const ExtraInfoItemLeft = styled.span`
    align-self: flex-start;
`;

export const ExtraInfoItemRight = styled.span`
    align-self: flex-end;
    position: absolute;
`;

export const SocialMediaIcon = styled.a`
    color: white;
    margin: 10px;
    :focus {
        outline: none;
    }
`;