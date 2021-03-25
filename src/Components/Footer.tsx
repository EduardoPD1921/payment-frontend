import React from 'react';

import Divider from '@material-ui/core/Divider';

import CopyrightIcon from '@material-ui/icons/Copyright';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
    FooterSection,
    FooterColumn,
    FooterLogo,
    FooterColumnContent,
    FooterColumnTitle,
    FooterContent,
    ExtraInfo,
    ExtraInfoContent,
    DividerSection,
    ExtraInfoItemLeft,
    ExtraInfoItemRight,
    SocialMediaIcon
} from '../StyledComponents';

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <FooterContent>
                <FooterColumn>
                    <FooterLogo href="/">{"{logo}"}</FooterLogo>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>Sobre nós</FooterColumnTitle>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>Soluções</FooterColumnTitle>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>Companhia</FooterColumnTitle>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>Recursos</FooterColumnTitle>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>Casos de uso</FooterColumnTitle>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                    <FooterColumnContent href="/">payload</FooterColumnContent>
                </FooterColumn>
            </FooterContent>
            <DividerSection>
                <Divider />
            </DividerSection>
            <ExtraInfo>
                <ExtraInfoContent>
                    <ExtraInfoItemLeft><CopyrightIcon style={{ fontSize: 12, marginRight: 2 }} /> Payment - 2021</ExtraInfoItemLeft>
                    <ExtraInfoItemRight>
                        <SocialMediaIcon href="https://twitter.com/duardoheleno" target="_blank"><TwitterIcon /></SocialMediaIcon>
                        <SocialMediaIcon href="https://www.instagram.com/eduardo_gomes_heleno/" target="_blank"><InstagramIcon /></SocialMediaIcon>
                        <SocialMediaIcon href="https://github.com/EduardoPD1921" target="_blank"><GitHubIcon /></SocialMediaIcon>
                    </ExtraInfoItemRight>
                </ExtraInfoContent>
            </ExtraInfo>
        </FooterSection>
    )
}

export default Footer;