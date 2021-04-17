import React from 'react';

import { Content, HeaderContent, Title } from './styles';

export default function Header(props) {
    const { children } = props;

    const { title } = props
    return (
        <Content>
            <HeaderContent>
                <Title> {title}</Title>
                {children}
            </HeaderContent>
        </Content>
    );
};