import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type UserInfoParams = {
    id: string;
}

const UserInfo: React.FC = () => {
    const { id } = useParams<UserInfoParams>();

    const [userInfo, setUserInfo] = useState<any>();

    useEffect(() => {
        const formData = { id };

        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/searchById',
            params: formData
        })
            .then(resp => setUserInfo(resp.data))
            .catch(error => console.log(error.response));
    }, [id])

    const renderUserInfo = () => {
        if (userInfo) {
            return (
                <div>
                    {userInfo.name}
                    {userInfo.email}
                </div>
            )
        }
    }

    return <div>{renderUserInfo()}</div>
}

export default UserInfo;