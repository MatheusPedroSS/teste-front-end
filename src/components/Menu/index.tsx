import React from 'react';
import { Container, Title } from './style';

interface Props {
    itensMenu: JSX.Element[]
}

const Menu: React.FC<Props> = ({itensMenu}) => {

    return(
        <Container>
            <Title>Menu</Title>
            {itensMenu} 
        </Container>
    );
}

export default Menu;