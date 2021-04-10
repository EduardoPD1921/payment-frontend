import React from 'react';

import ProfileTitle from '../Components/ProfileTitle';

const ProfilePage: React.FC = () => {
    return (
        <div className="app">
            <ProfileTitle 
                mainTitle="My profile" 
                subTitle="Change your informations" 
            />
        </div>
    )
}

export default ProfilePage;