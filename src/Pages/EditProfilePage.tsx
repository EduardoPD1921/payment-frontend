import React from 'react';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo
} from '../StyledComponents';

const EditProfilePage: React.FC = () => {
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
                        test
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default EditProfilePage;