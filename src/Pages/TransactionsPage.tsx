import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo
} from '../StyledComponents';

const cookie_token = Cookie.get('authToken');
const session_token = sessionStorage.getItem('authToken');

const TransactionsPage: React.FC = () => {
    const [userTransactions, setUserTransactions] = useState<any>();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/transaction/show', {
            headers: {
                'Authorization': `Bearer ${cookie_token || session_token}`
            }
        })
            .then(resp => userTransactionsHandler(resp.data))
            .catch(error => console.log(error.response));
    }, [])

    const userTransactionsHandler = (data: any) => {
        let organizedTransactions: any = [];

        data.map((transactionsArray: any) => {
            return transactionsArray.map((transactions: any) => {
                return organizedTransactions.push(transactions);
            })
        })

        setUserTransactions(organizedTransactions);
    }

    return (
        <div className="app">
            <ProfileTitle
                mainTitle="Minhas transações"
                subTitle="Estão listadas todas as ações da sua conta" 
            />
            <ProfilePageSection>
                <SideNav />
                <ProfilePageContent>
                    <UserInfo>
                        <MainInfo width={50}>
                            <button onClick={() => console.log(userTransactions)}>test</button>
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default TransactionsPage;