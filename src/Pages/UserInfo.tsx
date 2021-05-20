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
            .then(resp => {
                setUserInfo(resp.data);

                const userHistoric = Cookie.get('user_historic');

                if (userHistoric) {
                    const userHistoricArray = JSON.parse(userHistoric);

                    if (userHistoricArray.length === 0) {
                        userHistoricArray.unshift(resp.data);

                        const userHistoricJSON = JSON.stringify(userHistoricArray);
                        Cookie.set('user_historic', userHistoricJSON, { secure: true, expires: 3650 });
                    } else {
                        for (let i = 0; i <= userHistoricArray.length - 1; i++) {
                            if (userHistoricArray[i].email === resp.data.email) {
                                break;
                            }

                            if (i === userHistoricArray.length - 1) {
                                userHistoricArray.unshift(resp.data);

                                const userHistoricJSON = JSON.stringify(userHistoricArray);
                                Cookie.set('user_historic', userHistoricJSON, { secure: true, expires: 3650 });

                                break;
                            }
                        }
                    }
                }
            })
            .catch(error => console.log(error.response));
    }, [id]);

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