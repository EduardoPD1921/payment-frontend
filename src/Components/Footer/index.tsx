import React from 'react';

import Column from './Column';
import ExtraInfo from './ExtraInfo';

import {
    FooterSection,
    FooterColumn,
    FooterLogo,
    FooterContent,
} from '../../StyledComponents';

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <FooterContent>
                <FooterColumn>
                    <FooterLogo color="white" href="/">{"{logo}"}</FooterLogo>
                </FooterColumn>
                <Column title="Sobre nós" />
                <Column title="Soluções" />
                <Column title="Companhia" />
                <Column title="Recursos" />
                <Column title="Casos de uso" />
            </FooterContent>
            <ExtraInfo />
        </FooterSection>
    )
}

export default Footer;