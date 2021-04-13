import React from 'react';

import { NotEditableInput } from '../StyledComponents';

interface ProfileInputProps {
    inputValue: string;
}

const ProfileInput: React.FC<ProfileInputProps> = props => {
    return (
        <NotEditableInput disabled value={props.inputValue} />
    )
}

export default ProfileInput;