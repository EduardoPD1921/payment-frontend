import React from 'react';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import {
    ProfilePageSection,
    ProfilePageContent
} from '../StyledComponents';

const ProfilePage: React.FC = () => {
    return (
        <div className="app">
            <ProfileTitle 
                mainTitle="Meu perfil" 
                subTitle="Sempre confira suas informações" 
            />
            <ProfilePageSection>
                <SideNav />
                <ProfilePageContent>
                    test
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default ProfilePage;