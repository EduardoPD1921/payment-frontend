import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';
import ProfileInformation from '../Components/ProfileMainInfo';

import Loading from '@material-ui/core/CircularProgress';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo
} from '../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

const ProfilePage: React.FC = () => {
    const [profileInfo, setProfileInfo] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/user/getInfo',
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            }
        })
            .then(resp => setProfileInfo(resp.data))
            .then(() => setIsLoading(false))
            .catch(error => console.log(error.response));
    }, [])

    const renderInfo = () => {
        if (isLoading) {
            return <Loading style={{ color: '#11c76f', fontSize: 15 }} />
        }

        return (
            <ProfileInformation
                name={profileInfo.name}
                phone={profileInfo.phone_number}
                email={profileInfo.email}
                emailVerifiedAt={profileInfo.email_verified_at}
                image={profileInfo.image}
                createdAt={profileInfo.created_at}
                updatedAt={profileInfo.updated_at} 
            />
        )
    }

    return (
        <div className="app">
            <ProfileTitle 
                mainTitle="Meu perfil" 
                subTitle="Sempre confira suas informações" 
            />
            <ProfilePageSection>
                <SideNav />
                <ProfilePageContent>
                    <UserInfo>
                        <MainInfo displayFlex>
                            {renderInfo()}
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default ProfilePage;