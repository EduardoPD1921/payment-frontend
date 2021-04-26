import React from 'react';
import { useController } from 'react-hook-form';

import { SearchInput } from '../StyledComponents';

interface HeaderSearchInputProps {
    name: string;
    placeHolder: string;
    control: any;
}

const HeaderSearchInput: React.FC<HeaderSearchInputProps> = props => {
    const {
        field: {ref, ...inputProps}
    } = useController({
        name: props.name,
        control: props.control,
        defaultValue: ""
    });

    return <SearchInput {...inputProps} placeholder={props.placeHolder} />
}

export default HeaderSearchInput;