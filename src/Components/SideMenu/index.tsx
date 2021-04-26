import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import Content from './Content';

import {
    MenuButton
} from '../../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

const SideMenu: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [userInfo, setUserInfo] = useState<any>();

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/user/getInfo',
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            }
        })
            .then(resp => setUserInfo(resp.data))
            .catch(error => console.log(error.response));
    }, [])

    const renderAvatar = () => {
        if (userInfo) {
            if (userInfo.image) {
                return <Avatar src={userInfo.image} />
            }
        }

        return <AccountCircleIcon style={{ color: 'white', fontSize: 40 }} />
    }

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    }

    const renderDrawerContent = () => {
        if (userInfo) {
            return (
                <Content 
                    avatar={userInfo.image}
                    email={userInfo.email}
                />
            )
        }
    }

    return (
        <React.Fragment>
            <MenuButton onClick={toggleDrawer(true)}><ArrowLeftIcon style={{ color: 'white' }} />{renderAvatar()}</MenuButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {renderDrawerContent()}
            </Drawer>
        </React.Fragment>
    )
}

export default SideMenu;