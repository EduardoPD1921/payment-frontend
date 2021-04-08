import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Content from './Content';

import {
    MenuButton
} from '../../StyledComponents';

const SideMenu: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    }

    return (
        <React.Fragment>
            <MenuButton onClick={toggleDrawer(true)}><AccountCircleIcon style={{ color: 'white', fontSize: 40 }} /></MenuButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Content />
            </Drawer>
        </React.Fragment>
    )
}

export default SideMenu;