import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface UserCardProps {
    avatar: string;
    name: string;
    email: string;
}

const UserCard: React.FC<UserCardProps> = props => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    src={props.avatar}
                    title="Avatar" 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Compartilhar</Button>
                <Button size="small" color="primary">Saiba mais</Button>
            </CardActions>
        </Card>
    )
}

export default UserCard;