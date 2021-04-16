import React from 'react';

import { ImageInfo, AvatarIcon } from '../../StyledComponents';

interface ImageProps {
    image: string;
}

const Image: React.FC<ImageProps> = props => {
    return (
        <ImageInfo>
            <AvatarIcon src={props.image} />
        </ImageInfo>
    )
}

export default Image;