import React from 'react';

import Grid from '@material-ui/core/Grid';

import PersonIcon from '@material-ui/icons/Person';

import {
    CustomGrid,
    SideNavLink,
} from '../../StyledComponents';

interface ItemProps {
    icon: string;
    path: string;
    name: string;
}

const Item: React.FC<ItemProps> = props => {
    return (
        <CustomGrid container spacing={1}>
            <Grid item>
                <PersonIcon />
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