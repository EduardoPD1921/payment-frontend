import React from 'react';

import Item from './Item';

import {
    SideNavSection,
} from '../../StyledComponents';

const SideNav: React.FC = () => {
    return (
        <SideNavSection>
            <Item first icon="profile" path="/user/profile" name="Perfil" />
            <Item icon="edit" path="/user/edit" name="Editar perfil" />
            <Item icon="payment" path="/user/payments" name="Pagamentos" />
        </SideNavSection>
    )
}

export default SideNav;