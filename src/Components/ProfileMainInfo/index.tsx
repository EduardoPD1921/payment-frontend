import React from 'react';

import Image from './Image';
import Title from './TitleSection';
import MainInfo from './MainInfo';

import {
    BottomInfo
} from '../../StyledComponents';

interface ProfileMainInfoProps {
    name: string;
    phone: string;
    email: string;
    emailVerifiedAt: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

const ProfileMainInfo: React.FC<ProfileMainInfoProps> = props => {
    return (
        <React.Fragment>
            <Image image={props.image} />
            <BottomInfo>
                <Title 
                    createdAt={props.createdAt} 
                    updatedAt={props.updatedAt} 
                />
                <MainInfo
                    name={props.name}
                    phone={props.phone}
                    email={props.email}
                    emailVerifiedAt={props.emailVerifiedAt}
                />
            </BottomInfo>
        </React.Fragment>
    )
}

export default ProfileMainInfo;