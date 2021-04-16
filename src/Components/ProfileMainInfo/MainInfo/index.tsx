import React from 'react';

import ProfileInformation from './ProfileInformation';
import EmailConfirmed from '../../../Components/EmailConfirmed';
import EmailNotConfirmed from '../../../Components/EmailNotConfirmed';

import {
    CurrentInfo,
    InfoGroup,
    ProfileInfo,
    GradientButton
} from '../../../StyledComponents';

interface MainInfoProps {
    name: string;
    phone: string;
    email: string;
    emailVerifiedAt: string;
}

const MainInfo: React.FC<MainInfoProps> = props => {
    const checkEmailConfirmed = () => {
        if (!!props.emailVerifiedAt === true) {
            return <EmailConfirmed />
        }

        return <EmailNotConfirmed />
    }

    const renderConfirmEmailButton = () => {
        if (!!props.emailVerifiedAt !== true) {
            return <GradientButton>Confirmar e-mail</GradientButton>
        }
    }

    return (
        <CurrentInfo>
            <InfoGroup>
                <ProfileInformation value={props.name} />
                <ProfileInformation phoneNumber value={props.phone} />
            </InfoGroup>
            <InfoGroup marginTop={30}>
                <ProfileInformation value={props.email} />
                <ProfileInfo>
                    {checkEmailConfirmed()}
                </ProfileInfo>
            </InfoGroup>
            <InfoGroup justifyContent="center" marginTop={50}>
                {renderConfirmEmailButton()}
            </InfoGroup>
        </CurrentInfo>
    )
}

export default MainInfo;