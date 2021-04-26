import React from 'react';
import { useForm } from 'react-hook-form';

import { HeaderSection, SearchInput, HeaderInputSection, DefaultButton } from '../StyledComponents';

import SearchIcon from '@material-ui/icons/Search';

import HeaderSearchInput from './HeaderSearchInput';

interface SearchValues {
    search: string;
}

const Header: React.FC = () => {
    const { handleSubmit, control } = useForm<SearchValues>();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <HeaderSection>
            <HeaderInputSection>
                {/* <SearchInput type="text" placeholder="Buscar usuário" /> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <HeaderSearchInput placeHolder="Buscar usuário" control={control} name="search" />
                    <DefaultButton type="submit" backgroundDefault="#426dff" backgroundHover="#365ad6" borderRadius="10px" margin="10px">
                        <SearchIcon />
                    </DefaultButton>
                </form>
            </HeaderInputSection>
        </HeaderSection>
    )
}

export default Header;