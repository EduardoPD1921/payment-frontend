import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { HeaderSection, HeaderInputSection, DefaultButton, SearchForm } from '../StyledComponents';

import SearchIcon from '@material-ui/icons/Search';

import HeaderSearchInput from './HeaderSearchInput';

interface SearchValues {
    search: string;
}

interface HeaderProps {
    setSearchResult: (data: { search: string }) => void;
    setCurrentSearch: (search: string) => void;
    setSearchLoading: (loading: boolean) => void;
    setSearchErrorMessage: (errorMessage: string) => void;
}

const Header: React.FC<HeaderProps> = props => {
    const { handleSubmit, control } = useForm<SearchValues>();

    const onSubmit = (data: { search: string }) => {
        props.setSearchLoading(true);

        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/search',
            params: data
        })
            .then(resp => {
                props.setSearchResult(resp.data);
                props.setCurrentSearch(data.search);
                props.setSearchLoading(false);
            })
            .catch(error => searchErrorHandler(error.response.data.message));
    }

    const searchErrorHandler = (error: string) => {
        props.setSearchLoading(false);

        if (error === 'user-not-found') {
            props.setSearchErrorMessage('Usuário não encontrado!');
        } else {
            props.setSearchErrorMessage('Erro desconhecido!');
        }
    }

    return (
        <HeaderSection>
            <HeaderInputSection>
                <SearchForm onSubmit={handleSubmit(onSubmit)}>
                    <HeaderSearchInput placeHolder="Buscar usuário" control={control} name="search" />
                    <DefaultButton type="submit" backgroundDefault="#426dff" backgroundHover="#365ad6" borderRadius="10px" margin="10px">
                        <SearchIcon />
                    </DefaultButton>
                </SearchForm>
            </HeaderInputSection>
        </HeaderSection>
    )
}

export default Header;