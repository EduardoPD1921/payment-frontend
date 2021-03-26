import React from 'react';

import {
    FooterColumn,
    FooterColumnTitle,
    FooterColumnContent
} from '../../../StyledComponents'

interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = (props) => {
    return (
        <FooterColumn>
            <FooterColumnTitle>{props.title}</FooterColumnTitle>
            <FooterColumnContent href="/">payload</FooterColumnContent>
            <FooterColumnContent href="/">payload</FooterColumnContent>
            <FooterColumnContent href="/">payload</FooterColumnContent>
        </FooterColumn>
    )
}

export default Column;