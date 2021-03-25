import React from 'react';

import { HeaderSection, SearchInput, HeaderInputSection, DefaultButton } from '../StyledComponents';

import SearchIcon from '@material-ui/icons/Search';

const Header: React.FC = () => {
    return (
        <HeaderSection>
            <HeaderInputSection>
                <SearchInput type="text" placeholder="Buscar usuário" />
                <DefaultButton borderRadius="10px" margin="10px">
                    <SearchIcon />
                </DefaultButton>
            </HeaderInputSection>
        </HeaderSection>
    )
}

export default Header;