import React from 'react';

import {
    ProfileTitleSection,
    ProfileTitleLogoSection,
    TitleSection,
    NavLogo,
    MainTitle,
    SubTitle
} from '../StyledComponents';

interface ProfileTitleProps {
    mainTitle: string;
    subTitle: string;
}

const ProfileTitle: React.FC<ProfileTitleProps> = props => {
    return (
        <ProfileTitleSection>
            <ProfileTitleLogoSection>
                <NavLogo href="/" color="#a8a8a8">
                    {"{logo}"}
                </NavLogo>
            </ProfileTitleLogoSection>
            <TitleSection>
                <MainTitle>
                    {props.mainTitle}
                </MainTitle>
                <SubTitle>
                    {props.subTitle}
                </SubTitle>   
            </TitleSection>
        </ProfileTitleSection>
    )
}

export default ProfileTitle;