import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import Button from '@material-ui/core/Button';
import Loading from '@material-ui/core/CircularProgress';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo,
    ImageInfo,
    BottomInfo,
} from '../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

const EditProfilePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [profileInfo, setProfileInfo] = useState<any>({});
    const [currentImage, setCurrentImage] = useState<any>();

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
            <React.Fragment>
                <ImageInfo>
                    {renderProfileImage()}
                    <input
                        accept="image/*"
                        id="file-button"
                        type="file"
                        hidden
                        onChange={event => test(event.target.files)} 
                    />
                    <label htmlFor="file-button"> 
                        <Button
                            style={{
                                background: 'linear-gradient(149deg, rgba(255,135,3,1) 23%, rgba(255,73,107,1) 83%)',
                                textTransform: 'none',
                                borderRadius: 15,
                                color: 'white',
                                fontWeight: 600,
                                width: 160
                            }}
                            component="span"
                        >
                            Alterar imagem
                        </Button>
                    </label>
                </ImageInfo>
                <BottomInfo>
                    <button onClick={() => test2()}>test</button>
                </BottomInfo>
            </React.Fragment>
        )
    }

    const test = (image: any) => {
        setCurrentImage(image[0]);
    }

    const test2 = () => {
        const formData = new FormData();
        formData.append('image', currentImage);

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/test',
            data: formData
        })
            .then(resp => console.log(resp))
            .catch(error => console.log(error.response));
    }

    const renderProfileImage = () => {
        if (!!profileInfo.image !== true) {
            return <AccountCircleIcon style={{ fontSize: 300, color: '#d6d6d6' }} />
        }

        return 'ProfileImage';
    }

    return (
        <div className="app">
            <ProfileTitle 
                mainTitle="Editar perfil" 
                subTitle="Altere suas informações" 
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

export default EditProfilePage;