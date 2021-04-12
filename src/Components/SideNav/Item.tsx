import React from 'react';

import Grid from '@material-ui/core/Grid';

import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import ReceiptIcon from '@material-ui/icons/Receipt';

import {
    CustomGrid,
    SideNavLink,
} from '../../StyledComponents';

interface ItemProps {
    icon: string;
    path: string;
    name: string;
    first?: boolean;
}

const Item: React.FC<ItemProps> = props => {

    const renderIcon = () => {
        switch(props.icon) {
            case 'profile':
                return <PersonIcon />
            case 'edit':
                return <EditIcon />
            case 'payment':
                return <ReceiptIcon />
            default:
                console.log('Erro inesperado');
        }
    }

    return (
        <CustomGrid first={props.first} container spacing={1}>
            <Grid item>
                {renderIcon()}
            </Grid>
            <Grid item>
                <SideNavLink 
                    to={props.path}
                    >{props.name}
                </SideNavLink>
            </Grid>
        </CustomGrid>        
    )
}

export default Item;