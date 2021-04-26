import React from 'react';
import Cookie from 'js-cookie';

import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    SideMenuSection,
    SideMenuOption,
    AvatarIcon,
    LightInfo
} from '../../StyledComponents';

interface ContentProps {
    avatar: string;
    email: string;
}

const Content: React.FC<ContentProps> = props => {
    const logout = () => {
        Cookie.remove('authToken');
        sessionStorage.removeItem('authToken');
        window.location.reload();
    }

    return (
        <React.Fragment>
            <SideMenuSection>
                <AvatarIcon width={110} height={110} src={props.avatar} />
                <LightInfo marginBottom={30} fontSize={13}>{props.email}</LightInfo>
                <SideMenuOption
                    startIcon={<PersonIcon />}
                    href="/user/profile"
                >
                    Perfil
                </SideMenuOption>
                <SideMenuOption
                    startIcon={<AccountBalanceWalletIcon />}
                >
                    Carteira
                </SideMenuOption>
            </SideMenuSection>
            <SideMenuSection subMenu>
                <SideMenuOption
                    onClick={() => {logout()}}
                    startIcon={<ExitToAppIcon />}
                >
                    Sair
                </SideMenuOption>
            </SideMenuSection>
        </React.Fragment>
    )
}

export default Content;