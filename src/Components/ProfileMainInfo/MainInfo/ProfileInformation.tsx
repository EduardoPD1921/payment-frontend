import React from 'react';
import VMasker from 'vanilla-masker';

import ProfileInput from '../../ProfileInput';

import { ProfileInfo } from '../../../StyledComponents';

interface ProfileInformationProps {
    value: string;
    phoneNumber?: boolean;
}

const ProfileInformation: React.FC<ProfileInformationProps> = props => {
    const inputFormatter = () => {
        if (props.phoneNumber) {
            const formattedPhone = VMasker.toPattern(props.value, "(99) 99999-9999");

            return formattedPhone;
        }

        return props.value
    }

    return (
        <ProfileInfo>
            <ProfileInput inputValue={inputFormatter()} />
        </ProfileInfo>
    )
}

export default ProfileInformation;