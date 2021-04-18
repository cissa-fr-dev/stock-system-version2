import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Btn, Content, Text } from './styles';

export default function BackButton(props) {
    const { ...rest } = props;

    return (
        <Content >
            <Btn {...rest}>
                <FontAwesomeIcon style={{ color: "#1FA774", width: "20%", height: "100%" }} icon={faChevronLeft} />
                <Text>Voltar</Text>
            </Btn>
        </Content>
    );
};