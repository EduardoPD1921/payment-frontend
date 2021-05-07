import React from 'react';

import Item from './Item';

import {
    SideNavSection,
} from '../../StyledComponents';

const SideNav: React.FC = () => {
    return (
        <SideNavSection>
            <Item first icon="profile" path="/profile" name="Perfil" />
            <Item icon="edit" path="/profile/edit" name="Editar perfil" />
            <Item icon="payment" path="/payments" name="Pagamentos" />
        </SideNavSection>
    )
}

export default SideNav;