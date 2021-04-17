import React from 'react';

import { Content, Text } from './styles';

export default function AddButton(props) {
    const { text, ...rest } = props;

    return (
        <Content {...rest}>
            <Text>{text}</Text>
        </Content>
    );
};