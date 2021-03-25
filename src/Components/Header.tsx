import React from 'react';

import {
    HeaderSection
} from '../StyledComponents';

import headerImage from '../Static/Images/pagamento.jpg';

const Header: React.FC = () => {
    return (
        <HeaderSection imageUrl={headerImage}>
            test
        </HeaderSection>
    )
}

export default Header;