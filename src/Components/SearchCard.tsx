import React from 'react';

import {
    UserCard,
    AvatarIcon,
    LightTextRegister
} from '../StyledComponents';

interface SearchCardProps {
    avatar: string;
    name: string;
    email: string;
}

const SearchCard: React.FC<SearchCardProps> = props => {
    return (
        <UserCard>
            <AvatarIcon src={props.avatar} height={100} width={100} />
            {props.name}
            <LightTextRegister fontSize={12}>{props.email}</LightTextRegister>
        </UserCard>
    )
}

export default SearchCard;