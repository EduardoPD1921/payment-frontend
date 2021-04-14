import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import VMasker from 'vanilla-masker';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';
import ProfileInput from '../Components/ProfileInput';
import EmailNotConfirmed from '../Components/EmailNotConfirmed';
import EmailConfirmed from '../Components/EmailConfirmed';

import Loading from '@material-ui/core/CircularProgress';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
    CurrentInfo,
    ProfileInfo,
    InfoGroup,
    EmailConfirmButton
} from '../StyledComponents';

const cookieToken = Cookie.get('authToken');
const sessionToken = sessionStorage.getItem('authToken');

const ProfilePage: React.FC = () => {
    const [profileInfo, setProfileInfo] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/user/getInfo',
            headers: {
                'Authorization': `Bearer ${cookieToken || sessionToken}`
            }
        })
            .then(resp => setProfileInfo(resp.data))
            .then(() => setIsLoading(false))
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

    const phoneFormatter = (phone: string) => {
        const formattedPhone = VMasker.toPattern(phone, "(99) 99999-9999");

        return formattedPhone;
    }

    const checkEmailConfirmed = (confirmed: string) => {
        if (!!confirmed === true) {
            return <EmailConfirmed />
        }

        return <EmailNotConfirmed />
    }

    const renderConfirmEmailButton = (confirmed: string) => {
        if (!!confirmed !== true) {
            return <EmailConfirmButton>Confirmar e-mail</EmailConfirmButton>
        }
    }

    const checkProfileImage = (image: string) => {
        if (!!image !== true) {
            return <AccountCircleIcon style={{ fontSize: 300, color: '#d6d6d6' }} />
        }
        
        // Ainda não retorna a imagem do usuário
        // pois não temos a opção de upa-la
        return 'ProfileImage';
    }

    const renderInfo = () => {
        if (isLoading) {
            return <Loading style={{ color: '#11c76f', fontSize: 15 }} />
        }

        return (
            <React.Fragment>
                <ImageInfo>
                    {/* Área para imagem de perfil */}
                    {checkProfileImage(profileInfo.image)}
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
                        <InfoGroup>
                            <ProfileInfo>
                                <ProfileInput inputValue={profileInfo.name} />
                            </ProfileInfo>
                            <ProfileInfo>
                                <ProfileInput inputValue={phoneFormatter(profileInfo.phone_number)} />
                            </ProfileInfo>
                        </InfoGroup>
                        <InfoGroup marginTop={30}>
                            <ProfileInfo>
                                <ProfileInput inputValue={profileInfo.email} />
                            </ProfileInfo>
                            <ProfileInfo>
                                {checkEmailConfirmed(profileInfo.email_verified_at)}
                            </ProfileInfo>
                        </InfoGroup>
                        <InfoGroup justifyContent="center" marginTop={50}>
                            {renderConfirmEmailButton(profileInfo.email_verified_at)}
                        </InfoGroup>
                    </CurrentInfo>
                </BottomInfo>
            </React.Fragment>
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
                        <MainInfo>
                            {renderInfo()}
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default ProfilePage;