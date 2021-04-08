import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import {
    SideMenuList,
    SideMenuButton,
} from '../../StyledComponents';

const Content: React.FC = () => {
    return (
        <SideMenuList>
            <ListItem>
                <SideMenuButton
                    startIcon={<PersonIcon />}
                >
                    Perfil
                </SideMenuButton>
            </ListItem>
            <ListItem style={{ alignSelf: 'flex-end' }}>
                <SideMenuButton
                    startIcon={<AccountBalanceWalletIcon />}
                >
                    Carteira
                </SideMenuButton>
            </ListItem>
        </SideMenuList>   
    )
}

export default Content;