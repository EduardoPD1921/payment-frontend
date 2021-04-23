import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import VMasker from 'vanilla-masker';
import MaskedInput from 'react-input-mask';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';
import Snackbar from '../Components/SnackbarNotification';

import Button from '@material-ui/core/Button';
import Loading from '@material-ui/core/CircularProgress';

import errorHandler from '../ErrorHandler';

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
    GradientButton,
    OtherInfo,
    SecureEdit,
    TitleInfo,
    Title,
    LightTextRegister,
    FormButtonSection
} from '../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

interface EditInputValues {
    name: string;
    email: string;
    birth_date: string;
    phone_number: string;
    oldEmail: string;
    newEmail: string;
    oldPassword: string;
    newPassword: string;
}

const EditProfilePage: React.FC = () => {
    const { register, handleSubmit, control } = useForm<EditInputValues>();

    const [isLoading, setIsLoading] = useState(true);
    const [loadingRequest, setLoadingRequest] = useState(false);
    const [loadingEmailRequest, setLoadingEmailRequest] = useState(false);
    const [loadingPasswordRequest, setLoadingPasswordRequest] = useState(false);
    const [profileInfo, setProfileInfo] = useState<any>({});
    const [currentImage, setCurrentImage] = useState<any>();
    const [previewImage, setPreviewImage] = useState<any>();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const [nameError, setNameError] = useState('');
    const [newEmailError, setNewEmailError] = useState('');
    const [oldEmailError, setOldEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [birthDateError, setBirthDateError] = useState('');
    const [oldPasswordError, setOldPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');

    useEffect(() => {
        const tmp = localStorage.getItem('snackbar');

        if (tmp) {
            setSnackbarOpen(true);
            localStorage.removeItem('snackbar');
        }

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

    const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    }

    const renderInfo = () => {
        if (isLoading) {
            return <Loading style={{ color: '#11c76f', fontSize: 15 }} />
        }

        return (
            <React.Fragment>
                <ImageInfo>
                    <AvatarIcon height={300} width={300} src={previewImage ? previewImage : profileInfo.image} />
                    <input
                        accept="image/*"
                        id="file-button"
                        type="file"
                        hidden
                        onChange={event => onImageChange(event.target.files)} 
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
                                                error={!!nameError}
                                                helperText={nameError}
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
                                                error={!!phoneError}
                                                helperText={phoneError}
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
                                                width="90%"
                                                label="Data de nascimento"
                                                error={!!birthDateError}
                                                helperText={birthDateError}
                                                {...inputProps} 
                                            />
                                        )}
                                    </MaskedInput>
                                </ProfileInfo>
                            </InfoGroup>
                            <InfoGroup marginTop={50} justifyContent="center">
                                {renderSaveButton()}
                            </InfoGroup>
                        </form>
                    </CurrentInfo>
                </BottomInfo>
            </React.Fragment>
        )
    }

    const renderSaveButton = () => {
        if (loadingRequest) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return <GradientButton type="submit" width="25%">Salvar</GradientButton>
    }

    const renderSaveEmailButton = () => {
        if (loadingEmailRequest) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return <GradientButton type="submit" width="30%">Salvar</GradientButton>
    }

    const renderSavePasswordButton = () => {
        if (loadingPasswordRequest) {
            return <Loading style={{ color: '#11c76f' }} />
        }

        return <GradientButton type="submit" width="30%">Salvar</GradientButton>
    }

    const onSubmit = (data: any) => {
        setLoadingRequest(true);

        const formData = new FormData();
        const phoneRawValue = VMasker.toPattern(data.phone_number, '99999999999');

        formData.append('name', data.name);
        formData.append('phone_number', phoneRawValue);
        formData.append('birth_date', data.birth_date);
        formData.append('image', currentImage || '');

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/update',
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            },
            data: formData
        })
            .then(resp => onSubmitSuccess())
            .catch(error => onSubmitErrorHandler(error.response.data));
    }

    const onSubmitEmailEdit = (data: any) => {
        setLoadingEmailRequest(true);

        const formData = {
            oldEmail: data.oldEmail,
            newEmail: data.newEmail
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/emailUpdate',
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            },
            data: formData
        })
            .then(resp => onSubmitSuccess())
            .catch(error => onSubmitErrorHandler(error.response.data));
    }

    const onSubmitPasswordEdit = (data: any) => {
        setLoadingPasswordRequest(true);

        const formData = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/passwordUpdate',
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            },
            data: formData
        })
            .then(resp => onSubmitSuccess())
            .catch(error => onSubmitErrorHandler(error.response.data));
    }

    const onSubmitSuccess = () => {
        localStorage.setItem('snackbar', 'true');
        window.location.reload();
    }

    interface ErrorTypes {
        name: [string];
        email: [string];
        birth_date: [string];
        phone_number: [string];
        password: [string];
        newEmail: [string];
        oldEmail: [string];
        newPassword: [string];
        oldPassword: [string];
        message: string;
    }

    const onSubmitErrorHandler = (error: ErrorTypes) => {
        setLoadingRequest(false);
        setLoadingEmailRequest(false);
        setLoadingPasswordRequest(false);
        setNameError('');
        setPhoneError('');
        setBirthDateError('');
        setOldEmailError('');
        setNewEmailError('');
        setOldPasswordError('');
        setNewPasswordError('');

        if (error.name) {
            return setNameError(errorHandler(error));
        }

        if (error.birth_date) {
            return setBirthDateError(errorHandler(error));
        }

        if (error.phone_number) {
            return setPhoneError(errorHandler(error));
        }

        if (error.oldEmail) {
            return setOldEmailError(errorHandler(error));
        }

        if (error.newEmail) {
            return setNewEmailError(errorHandler(error));
        }

        if (error.oldPassword) {
            return setOldPasswordError(errorHandler(error));
        }

        if (error.newPassword) {
            return setNewPasswordError(errorHandler(error));
        }

        if (error.message) {
            if (error.message === 'email-already-in-use') {
                return setNewEmailError(errorHandler(error));
            }

            if (error.message === 'wrong-old-email') {
                return setOldEmailError(errorHandler(error));
            }

            if (error.message === 'wrong-old-password') {
                return setOldPasswordError(errorHandler(error));
            }
        }
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

    const onImageChange = (image: any) => {
        setCurrentImage(image[0]);
        setPreviewImage(URL.createObjectURL(image[0]));
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
                        <OtherInfo>
                            <SecureEdit marginBottom={20}>
                                <TitleInfo>
                                    <Title>
                                        <LightTextRegister fontSize={18}>Alterar e-mail</LightTextRegister>
                                    </Title>
                                </TitleInfo>
                                <form onSubmit={handleSubmit(onSubmitEmailEdit)}>
                                    <Controller
                                        name="oldEmail"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <CustomTextField
                                                error={!!oldEmailError}
                                                helperText={oldEmailError}
                                                width="50%"
                                                marginLeft={80}
                                                label="E-mail atual"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                    <Controller
                                        name="newEmail"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <CustomTextField
                                                error={!!newEmailError}
                                                helperText={newEmailError}
                                                width="50%"
                                                marginLeft={80}
                                                marginTop={30}
                                                label="Novo e-mail"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                    <FormButtonSection marginTop={50} width="75%">
                                        {renderSaveEmailButton()}
                                    </FormButtonSection>
                                </form>
                            </SecureEdit>
                            <SecureEdit>
                                <TitleInfo>
                                    <Title>
                                        <LightTextRegister fontSize={18}>Alterar senha</LightTextRegister>
                                    </Title>
                                </TitleInfo>
                                <form onSubmit={handleSubmit(onSubmitPasswordEdit)  }>
                                    <Controller
                                        name="oldPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <CustomTextField
                                                type="password"
                                                error={!!oldPasswordError}
                                                helperText={oldPasswordError}
                                                width="50%"
                                                marginLeft={80}
                                                label="Senha atual"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                    <Controller
                                        name="newPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <CustomTextField
                                                type="password"
                                                error={!!newPasswordError}
                                                helperText={newPasswordError}
                                                width="50%"
                                                marginLeft={80}
                                                marginTop={30}
                                                label="Nova senha"
                                                {...field} 
                                            />
                                        )} 
                                    />
                                    <FormButtonSection marginTop={50} width="75%">
                                        {renderSavePasswordButton()}
                                    </FormButtonSection>
                                </form>
                            </SecureEdit>
                        </OtherInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
            <Snackbar
                message="Alterações realizadas com sucesso!"
                isOpen={snackbarOpen}
                handleClose={handleSnackbarClose} 
            />
        </div>
    )
}

export default EditProfilePage;