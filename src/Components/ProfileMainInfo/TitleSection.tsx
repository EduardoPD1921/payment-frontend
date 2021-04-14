import React from 'react';

import {
    TitleInfo,
    Title,
    LightTextRegister,
    LightText,
    TimeStamps
} from '../../StyledComponents';

interface TitleSectionProps {
    createdAt: string;
    updatedAt: string;
}

const TitleSection: React.FC<TitleSectionProps> = props => {
    const dateFormatter = (date: string) => {
        const temp = new Date(date);

        let year: any = temp.getFullYear();
        let month: any = temp.getMonth() + 1;
        let dt: any = temp.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }

        if (month < 10) {
            month = '0' + month;
        }

        const formattedDate = `${dt}/${month}/${year}`;

        return formattedDate;
    }

    return (
        <TitleInfo>
            <Title>
                <LightTextRegister fontSize={18}>Meu perfil</LightTextRegister>
            </Title>
            <TimeStamps>
                <LightText fontSize={13}>Criação da conta: {dateFormatter(props.createdAt)}</LightText>
                <LightText marginTop={10} fontSize={13}>Última atualização: {dateFormatter(props.updatedAt)}</LightText>
            </TimeStamps>
        </TitleInfo>
    )
}

export default TitleSection;