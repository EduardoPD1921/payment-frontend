import React from 'react';
import VMasker from 'vanilla-masker';

import {
    TransactionInfo,
    InfoSection,
    TransactionText,
    HourInfo,
    TransactionAmount
} from '../StyledComponents';

interface TransactionInfoCardProps {
    userName: string;
    date: Date;
    amount: number;
    received?: boolean;
}

const TransactionInfoCard: React.FC<TransactionInfoCardProps> = props => {
    const convertAmountToMoney = (amount: number) => {
        const convertedValue = VMasker.toMoney(amount);

        return convertedValue;
    }

    const dataFormatter = () => {
        const transactionFullDate = new Date(props.date);
        const transactionDay = transactionFullDate.getDate();
        const transactionMonth = transactionFullDate.getMonth() + 1;
        const transactionYear = transactionFullDate.getFullYear();
        const transactionHours = transactionFullDate.getHours();
        const transactionMinutes = transactionFullDate.getMinutes();

        const transactionDateStr = `${transactionDay}/${transactionMonth}/${transactionYear} ${transactionHours}:${transactionMinutes}`;

        return transactionDateStr;
    }

    return (
        <TransactionInfo>
            <InfoSection>
                <TransactionText fontSize={15}>{props.userName}</TransactionText>
                <HourInfo>{dataFormatter()}</HourInfo>
            </InfoSection>
            <InfoSection alignFlexEnd>
                <TransactionAmount received={props.received ? true : false}>
                    {props.received ? `+${convertAmountToMoney(props.amount)}R$` : `-${convertAmountToMoney(props.amount)}R$`}
                </TransactionAmount>
            </InfoSection>
        </TransactionInfo>
    )
}

export default TransactionInfoCard;