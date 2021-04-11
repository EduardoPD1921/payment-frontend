import React from 'react';

import Item from './Item';

import {
    SideNavSection,
} from '../../StyledComponents';

const SideNav: React.FC = () => {
    return (
        <SideNavSection>
            <Item icon="test" path="/test" name="Perfil" />
        </SideNavSection>
    )
}

export default SideNav;