import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

import ProfileTitle from '../Components/ProfileTitle';
import SideNav from '../Components/SideNav';
import TransactionInfoCard from '../Components/TransactionInfoCard';

import {
    ProfilePageSection,
    ProfilePageContent,
    UserInfo,
    MainInfo,
    TransactionText,
    TransactionTitleSection
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

    const renderAllTransactions = () => {
        if (userTransactions) {
            return (
                <React.Fragment>
                    {userTransactions.map((transaction: any) => {
                        if (transaction.receiver) {
                            return (
                                <TransactionInfoCard
                                    userName={transaction.receiver.name}
                                    date={transaction.created_at}
                                    amount={transaction.amount}
                                />
                            )
                        }

                        if (transaction.payer) {
                            return (
                                <TransactionInfoCard
                                    received
                                    userName={transaction.payer.name}
                                    date={transaction.created_at}
                                    amount={transaction.amount} 
                                />
                            )
                        }

                        return false;
                    })}
                </React.Fragment>
            )
        }
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
                            <TransactionTitleSection>
                                <TransactionText marginLeft={40} fontSize={20}>
                                    Transações
                                </TransactionText>
                            </TransactionTitleSection>
                            {renderAllTransactions()}
                        </MainInfo>
                    </UserInfo>
                </ProfilePageContent>
            </ProfilePageSection>
        </div>
    )
}

export default TransactionsPage;