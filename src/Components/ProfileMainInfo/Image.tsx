import React from 'react';

import { ImageInfo } from '../../StyledComponents';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface ImageProps {
    image: string;
}

const Image: React.FC<ImageProps> = props => {
    const checkProfileImage = () => {
        if (!!props.image !== true) {
            return <AccountCircleIcon style={{ fontSize: 300, color: '#d6d6d6' }} />
        }

        // ainda não retorna a imagem do usuário
        // pois não temos a opção de upa-la
        return 'ProfileImage'
    }

    return (
        <ImageInfo>
            {checkProfileImage()}
        </ImageInfo>
    )
}

export default Image;