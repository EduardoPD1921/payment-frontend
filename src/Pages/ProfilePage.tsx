import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo,
    BottomInfo,
    ImageInfo,
    TitleInfo,
    Title,
    TimeStamps
} from '../StyledComponents';

const cookieToken = Cookie.get('authToken');
const sessionToken = sessionStorage.getItem('authToken');

const ProfilePage: React.FC = () => {
    const [profileInfo, setProfileInfo] = useState<any>({});

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/user/getInfo',
            headers: {
                'Authorization': `Bearer ${cookieToken || sessionToken}`
            }
        })
            .then(resp => setProfileInfo(resp.data))
            .catch(error => console.log(error.response));
    }, [])

    const dateFormatter = (date: string) => {
        const temp = new Date(date);

        let year: any = temp.getFullYear();
        let month: any = temp.getMonth() + 1;
        let dt: any = temp.getDate();

        if (dt < 10) {
            dt = '0' + dt; 
        }

        if (month < 10) {
            month = '0' + month;
        }

        const formattedDate = `${dt}/${month}/${year}`;
        
        return formattedDate;
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
                        <MainInfo>
                            <ImageInfo>
                                test
                            </ImageInfo>
                            <BottomInfo>
                                <TitleInfo>
                                    <Title>Test</Title>
                                    <TimeStamps>
                                        <span>Criação da conta: {dateFormatter(profileInfo.created_at)}</span>
                                        <span></span>
                                    </TimeStamps>
                                </TitleInfo>
                            </BottomInfo>
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
                <button onClick={() => console.log(profileInfo)}>dsadasda</button>
            </ProfilePageSection>
        </div>
    )
}

export default ProfilePage;