import React from 'react';

import { Content } from './styles';

export default function EditButton(props) {
    const { ...rest } = props;

    return (
        <Content {...rest} />
    );
};