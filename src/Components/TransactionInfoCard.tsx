import React from 'react';
import VMasker from 'vanilla-masker';

import {
    TransactionInfo,
    InfoSection,
    NameInfo,
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
    const test = (value: number) => {
        const tmp = VMasker.toMoney(value);

        return tmp;
    }

    return (
        <TransactionInfo>
            <InfoSection>
                <NameInfo>{props.userName}</NameInfo>
                <HourInfo>{props.date}</HourInfo>
            </InfoSection>
            <InfoSection alignFlexEnd>
                <TransactionAmount received={props.received ? true : false}>
                    {props.received ? `+${test(props.amount)}R$` : `-${test(props.amount)}R$`}
                </TransactionAmount>
            </InfoSection>
        </TransactionInfo>
    )
}

export default TransactionInfoCard;