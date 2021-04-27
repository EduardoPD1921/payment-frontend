import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { HeaderSection, HeaderInputSection, DefaultButton } from '../StyledComponents';

import SearchIcon from '@material-ui/icons/Search';

import HeaderSearchInput from './HeaderSearchInput';

interface SearchValues {
    search: string;
}

interface HeaderProps {
    setSearchResult: (data: { search: string }) => void;
}

const Header: React.FC<HeaderProps> = props => {
    const { handleSubmit, control } = useForm<SearchValues>();

    const onSubmit = (data: { search: string }) => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/search',
            params: data
        })
            .then(resp => props.setSearchResult(resp.data))
            .catch(error => console.log(error.response));
    }

    return (
        <HeaderSection>
            <HeaderInputSection>
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