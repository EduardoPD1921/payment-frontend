import React from 'react';

import Button from '@material-ui/core/Button';

import {
    UserCard,
    AvatarIcon,
    LightTextRegister
} from '../StyledComponents';

interface SearchCardProps {
    avatar: string;
    name: string;
    email: string;
    id: string;
    onDepositClick: (receiverId: string) => void;
}

const SearchCard: React.FC<SearchCardProps> = props => {
    return (
        <UserCard>
            <AvatarIcon src={props.avatar} height={100} width={100} />
            {props.name}
            <LightTextRegister marginBottom={10} fontSize={12}>{props.email}</LightTextRegister>
            <Button onClick={() => props.onDepositClick(props.id)} color="primary">Depositar</Button>
        </UserCard>
    )
}

export default SearchCard;