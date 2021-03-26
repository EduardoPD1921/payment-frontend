import React from 'react';

import Divider from '@material-ui/core/Divider';

import CopyRightIcon from '@material-ui/icons/Copyright';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
    DividerSection,
    ExtraInfoSection,
    ExtraInfoContent,
    ExtraInfoItemLeft,
    ExtraInfoItemRight,
    SocialMediaIcon
} from '../../../StyledComponents';

const ExtraInfo: React.FC = () => {
    return (
        <React.Fragment>
            <DividerSection>
                <Divider />
            </DividerSection>
            <ExtraInfoSection>
                <ExtraInfoContent>
                    <ExtraInfoItemLeft><CopyRightIcon style={{ fontSize: 12, marginRight: 2 }} /> Payment - 2021</ExtraInfoItemLeft>
                    <ExtraInfoItemRight>
                        <SocialMediaIcon href="https://twitter.com/duardoheleno" target="_blank"><TwitterIcon /></SocialMediaIcon>
                        <SocialMediaIcon href="https://www.instagram.com/eduardo_gomes_heleno/" target="_blank"><InstagramIcon /></SocialMediaIcon>
                        <SocialMediaIcon href="https://github.com/EduardoPD1921" target="_blank"><GitHubIcon /></SocialMediaIcon>
                    </ExtraInfoItemRight>
                </ExtraInfoContent>
            </ExtraInfoSection>
        </React.Fragment>
    )
}

export default ExtraInfo;