import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import VMasker from 'vanilla-masker';
import MaskedInput from 'react-input-mask';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import Button from '@material-ui/core/Button';
import Loading from '@material-ui/core/CircularProgress';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo,
    ImageInfo,
    AvatarIcon,
    CustomTextField,
    ProfileInfo,
    InfoGroup,
    BottomInfo,
    CurrentInfo,
    GradientButton
} from '../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

interface EditInputValues {
    name: string;
    email: string;
    birth_date: string;
    phone_number: string;
}

const EditProfilePage: React.FC = () => {
    const { register, handleSubmit, control } = useForm<EditInputValues>();

    const [isLoading, setIsLoading] = useState(true);
    const [profileInfo, setProfileInfo] = useState<any>({});
    // const [currentImage, setCurrentImage] = useState<any>();
    const [previewImage, setPreviewImage] = useState<any>();

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
                    {/* {renderProfileImage()} */}
                    {/* previewImage ? previewImage : profileInfo.image */}
                    <AvatarIcon src={previewImage} />
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
                    <CurrentInfo>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <InfoGroup>
                                <ProfileInfo>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue={profileInfo.name}
                                        render={({ field }) => (
                                            <CustomTextField
                                                label="Nome"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                </ProfileInfo>
                            </InfoGroup>
                            <InfoGroup marginTop={50}>
                                <ProfileInfo>
                                    <MaskedInput
                                        mask="(99) 99999-9999"
                                        {...register("phone_number")}
                                        defaultValue={profileInfo.phone_number}
                                    >
                                        {(inputProps: object) => (
                                            <CustomTextField
                                                width="90%"
                                                label="Telefone"
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </ProfileInfo>
                                <ProfileInfo>
                                    <MaskedInput
                                        mask="99/99/9999"
                                        {...register("birth_date")}
                                        defaultValue={dateFormatter(profileInfo.birth_date)}
                                    >
                                        {(inputProps: object) => (
                                            <CustomTextField
                                                label="Data de nascimento"
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </ProfileInfo>
                            </InfoGroup>
                            <InfoGroup marginTop={50} justifyContent="center">
                                <GradientButton type="submit" width="25%">Salvar</GradientButton>
                            </InfoGroup>
                        </form>
                    </CurrentInfo>
                </BottomInfo>
            </React.Fragment>
        )
    }

    const onSubmit = (data: any) => {
        console.log(data);
    }

    const dateFormatter = (date: string) => {
        const gmtDate = date + 'T20:00-04:00';
        const temp = new Date(gmtDate);

        let year: any = temp.getFullYear();
        let month: any = temp.getMonth() + 1;
        let dt: any = temp.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }

        if (month < 10) {
            month = '0' + month;
        }

        const formattedDate = `${dt}${month}${year}`;

        return formattedDate;
    }

    const test = (image: any) => {
        // setCurrentImage(image[0]);
        setPreviewImage(URL.createObjectURL(image[0]));
    }

    // const test2 = () => {
    //     const formData = new FormData();
    //     formData.append('image', currentImage);

    //     axios({
    //         method: 'POST',
    //         url: 'http://127.0.0.1:8000/api/user/test',
    //         headers: {
    //             'Authorization': `Bearer ${cookie_token || session_token}`
    //         },
    //         data: formData
    //     })
    //         .then(resp => console.log(resp))
    //         .catch(error => console.log(error.response));
    // }

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