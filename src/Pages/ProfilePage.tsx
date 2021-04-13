import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';
import ProfileInput from '../Components/ProfileInput';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo,
    BottomInfo,
    ImageInfo,
    TitleInfo,
    Title,
    TimeStamps,
    LightText,
    LightTextRegister,
    CurrentInfo
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
                                
                            </ImageInfo>
                            <BottomInfo>
                                <TitleInfo>
                                    <Title>
                                        <LightTextRegister fontSize={18}>Meu perfil</LightTextRegister>
                                    </Title>
                                    <TimeStamps>
                                        <LightText fontSize={13}>Criação da conta: {dateFormatter(profileInfo.created_at)}</LightText>
                                        <LightText marginTop={10} fontSize={13}>Última atualização: {dateFormatter(profileInfo.updated_at)}</LightText>
                                    </TimeStamps>
                                </TitleInfo>
                                <CurrentInfo>
                                    <ProfileInput inputValue={profileInfo.name} />
                                </CurrentInfo>
                            </BottomInfo>
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default ProfilePage;