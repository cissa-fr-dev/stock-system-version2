import React from 'react';

import { Content } from './styles';

export default function TrashButton(props) {
    const { ...rest } = props;

    return (
        <Content {...rest} />
    );
};