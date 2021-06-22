import styled from 'styled-components';

import background from '../Static/Images/background.png';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

interface LightTextGeneralProps {
    fontSize: number;
    marginTop?: number;
    marginRight?: number;
    marginLeft?: number;
    marginBottom?: number;
    alignSelfCenter?: boolean;
}

export const LightTextRegister = styled.span`
    margin-top: ${(props: LightTextGeneralProps) => props.marginTop || 0}px;
    margin-right: ${(props: LightTextGeneralProps) => props.marginRight || 0}px;
    margin-bottom: ${(props: LightTextGeneralProps) => props.marginBottom || 0}px;
    font-size: ${(props: LightTextGeneralProps) => props.fontSize}px;
    color: #5c5c5c;
`;

export const LightText = styled.span`
    margin-top: ${(props: LightTextGeneralProps) => props.marginTop || 0}px;
    margin-left: ${(props: LightTextGeneralProps) => props.marginLeft || 0}px;
    color: #d4d4d4;
    font-size: ${(props: LightTextGeneralProps) => props.fontSize}px;
    align-self: ${(props: LightTextGeneralProps) => props.alignSelfCenter ? 'center' : ''};
`;

interface LightInfoProps {
    fontSize: number;
    marginBottom?: number;
}

export const LightInfo = styled.span`
    color: white;
    font-size: ${(props: LightInfoProps) => props.fontSize}px;
    margin-bottom: ${(props: LightInfoProps) => props.marginBottom || 0}px;
`;

export const LinkItem = styled.a`
    color: #11c76f;
    font-size: 14px;
    margin-left: 5px;
`;

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

interface NavLogoProps {
    color: string;
    profilePage?: boolean;
}

export const NavLogo = styled.a`
    color: ${(props: NavLogoProps) => props.color};
    font-size: 40px;
    font-weight: 600;
    text-decoration: none;
    ${(props: NavLogoProps) => props.profilePage ?
        `background: #FE6C40;
        background: -webkit-linear-gradient(to right, #FE6C40 0%, #ff00cb 100%);
        background: -moz-linear-gradient(to right, #FE6C40 0%, #ff00cb 100%);
        background: linear-gradient(to right, #FE6C40 0%, #ff00cb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        ` 
    :
    ''
};
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
    width?: string;
    borderRadius: string;
    margin?: string;
    backgroundDefault: string;
    backgroundHover: string;
}

export const DefaultButton = styled(Button)`
    && {
        height: 50px;
        width: ${(props: DefaultButtonProps) => props.width || '100%'};
        color: white;
        font-weight: 600;
        margin: ${(props: DefaultButtonProps) => props.margin || '0'};
        border-radius: ${(props: DefaultButtonProps) => props.borderRadius};
        background: ${(props: DefaultButtonProps) => props.backgroundDefault};
        :hover {
            background: ${(props: DefaultButtonProps) => props.backgroundHover};
        }

        @media(max-width: 570px) {
            height: 35px;
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
    justify-content: center;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media(max-width: 570px) {
        height: 100px;
        flex-direction: column;
    }
`;

export const FooterSection = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    position: static;
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

export const ExtraInfoSection = styled(FooterColumn)`
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

interface FormSectionProps {
    height: number;
}

export const FormSection = styled.div`
    display: flex;
    flex: 1;
    height: ${(props: FormSectionProps) => props.height}px;
    justify-content: center;
    align-items: center;
`;

interface DefaultFormSectionProps {
    width: string;
    height: number;
    flexDirection: string;
    justifyContent?: string;
    alignItems?: string;
}

export const DefaultFormSection = styled.div`
    display: flex;
    flex-direction: ${(props: DefaultFormSectionProps) => props.flexDirection};
    width: ${(props: DefaultFormSectionProps) => props.width};
    height: ${(props: DefaultFormSectionProps) => props.height}px;
    justify-content: ${(props: DefaultFormSectionProps) => props.justifyContent};
    align-items: ${(props: DefaultFormSectionProps) => props.alignItems};
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
`;

export const RegisterFormInputs = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
    flex: 2;
    border-radius: 0 10px 10px 0;
`;

export const RegisterFormIllustration = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    border-radius: 10px 0 0 10px;
    background: #003ecb;
`;

export const RegisterIllustration = styled.img`
    width: 100%;
`;

interface CustomTextFieldProps {
    width?: string;
    marginTop?: number;
    marginLeft?: number;
}

export const CustomTextField = styled(TextField)`
    && {
        width: ${(props: CustomTextFieldProps) => props.width || '120%'};
        margin-top: ${(props: CustomTextFieldProps) => props.marginTop || ''}px;
        margin-left: ${(props: CustomTextFieldProps) => props.marginLeft || ''}px;
    }

    & .MuiInput-underline:after {
        border-bottom-color: #11c76f;
    }

    && .MuiInput-underline:hover:before {
        border-bottom: 1px solid gray;
    }

    & label.Mui-focused {
        color: #11c76f;
    }
`;

export const RegisterFormTitle = styled.span`
    margin: 20px 0 0 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 20px;
    color: #617865;
    font-weight: 400;
`;

interface FormButtonSectionProps {
    width: string;
    marginTop?: number;
}

export const FormButtonSection = styled.div`
    display: flex;
    margin-top: ${(props: FormButtonSectionProps) => props.marginTop || 20}px;
    flex-direction: column;
    align-items: center;
    width: ${(props: FormButtonSectionProps) => props.width};
`;

export const MenuButton = styled(Button)`
    && {
        margin: 20px 40px 20px 20px;
    }
`;

export const RememberAccountSection = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

interface SideMenuSectionProps {
    subMenu?: boolean;
}

export const SideMenuSection = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${(props: SideMenuSectionProps) => props.subMenu ? 'flex-end' : 'flex-start'};
    flex-direction: column;
    align-items: center;
    background: #11c76f;
    width: 200px;
`;

export const SideMenuOption = styled(Button)`
    && {
        margin: 5px;
        width: 70%;
        font-size: 15px;
        color: white;
        text-transform: none;
    }
`;

export const ProfileTitleSection = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 85px;
`;

export const ProfileTitleLogoSection = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
`;

export const MainTitle = styled.span`
    margin-top: 5px;
    font-size: 30px;
    color: #454545;
`;

export const SubTitle = styled.span`
    font-size: 15px;
    color: #919191;
`;

export const ProfilePageSection = styled.div`
    display: flex;
    flex: 1;
    height: 91%;
    flex-direction: row;
`;

export const SideNavSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

export const ProfilePageContent = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: 100%;
    flex: 4;
`;

export const SideNavLink = styled(Link)`
    color: #bcbcbc;
    text-decoration: none;
    transition: 0.3s;
`;

interface CustomGridProps {
    first?: boolean;
}

export const CustomGrid = styled(Grid)`
    && {
        display: flex;
        justify-content: center;
        color: #bcbcbc;
        border-radius: 5px;
        margin-top: ${(props: CustomGridProps) => props.first ? '50px' : '20px'};
        width: 40%;
        transition: 0.3s;
        :hover {
            background: #f5f5f5;
            color: #5c5c5c;

            ${SideNavLink} {
                color: #5c5c5c;
            }
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    height: 85%;
    width: 85%;
    flex: 1;
    justify-content: center;
    padding: 50px;
    border-radius: 25px;
    background: black;
    background: rgba(0, 0, 0, 0.1);
`;

interface MainInfoProps {
    width?: number;
}

export const MainInfo = styled.div`
    display: flex;
    flex: ${(props: MainInfoProps) => props.width ? '' : '1'};
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 25px;
    height: 100%;
    width: ${(props: MainInfoProps) => props.width ? props.width : ''}%;
    margin: 0 20px 0 20px;
`;

export const OtherInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    margin-left: 20px;
`;

interface SecureEditProps {
    marginBottom?: number;
}

export const SecureEdit = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: ${(props: SecureEditProps) => props.marginBottom || ''}px;
    background: white;
    border-radius: 25px;
`;

export const ImageInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const BottomInfo = styled.div`
    flex: 1;
`;

export const TitleInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 40px 20px 40px;
`;

export const Title = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const TimeStamps = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
`;

export const CurrentInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 40px 40px 20px 50px;
`;

export const NotEditableInput = styled.input`
    :disabled {
        border-style: solid;
        border: none;
        border-bottom: 1px solid #B8B8B8;
        padding-bottom: 10px;
        background: white;
        width: 90%;
    }
`;

export const EditableInput = styled(TextField)`
    width: 40%;
`;

export const ProfileInfo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

interface InfoGroupProps {
    marginTop?: number;
    justifyContent?: string;
}

export const InfoGroup = styled.div`
    display: flex;
    margin-top: ${(props: InfoGroupProps) => props.marginTop || ''}px;
    justify-content: ${(props: InfoGroupProps) => props.justifyContent || ''};
    flex-direction: row;
    flex: 1;
`;

interface GradientButtonProps {
    width?: string;
}

export const GradientButton = styled(Button)`
    && {
        text-transform: none;
        color: white;
        border-radius: 15px;
        font-weight: 600;
        width: ${(props: GradientButtonProps) => props.width || '35%'};
        background: linear-gradient(149deg, rgba(255,135,3,1) 23%, rgba(255,73,107,1) 83%);
    }
`;

interface AvatarIconProps {
    height: number;
    width: number;
}

export const AvatarIcon = styled(Avatar)`
    && {
        background: #d6d6d6;
        height: ${(props: AvatarIconProps) => props.height}px;
        width: ${(props: AvatarIconProps) => props.width}px;
        margin-top: 45px;
        margin-bottom: 20px;
    }
`;

export const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 30px 0 500px 0;
    height: auto;
`;

export const SearchResults = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`;

export const UserCard = styled.div`
    display: flex;
    width: 14%;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    margin: 25px;
    -webkit-box-shadow: 7px 4px 27px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 4px 27px -5px rgba(0,0,0,0.75);
    box-shadow: 7px 4px 27px -5px rgba(0,0,0,0.75);
`;

export const ErrorSection = styled.div`
    display: flex;
    flex-direction: row;
    color: red;
    margin-left: 10px;
`;

export const ModalTransaction = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 30%;
    border-radius: 5px;
    background: #ebebeb;
`;

export const ModalTitle = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
`;

export const ModalTitleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
`;

export const TransactionValueSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModalActionsSection = styled.div`
    margin-top: 30px;
`;

interface ModalActionButtonProps {
    deposit?: boolean;
}

export const ModalActionButton = styled(Button)`
    flex: 1;
    align-self: center;

    && {
        margin: 10px;
        background: ${(props: ModalActionButtonProps) => props.deposit ? '#11c76f' : ''};
        :hover {
            background: ${(props: ModalActionButtonProps) => props.deposit ? '#10ad61' : ''};
        }
    }
`;

export const TransactionInfo = styled.div`
    display: flex;
    width: 60%;
    height: 8%;
    flex-direction: row;
    border-radius: 30px;
    background: #f1f1fb;
`;

interface InfoSectionProps {
    alignFlexEnd?: boolean;
}

export const InfoSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props: InfoSectionProps) => props.alignFlexEnd ? 'flex-end' : ''};
    padding: 0 20px 0 20px;
`;

export const NameInfo = styled.span`
    color: #263149;
    font-size: 15px;
    font-weight: 600;
`;

export const HourInfo = styled.span`
    color: #c4c4c6;
    font-size: 12px;
`;

interface TransactionAmountProps {
    received?: boolean;
}

export const TransactionAmount = styled.span`
    color: ${(props: TransactionAmountProps) => props.received ? '#16985d' : '#eb4f5c'};
    font-size: 15px;
    font-weight: 600;
`;