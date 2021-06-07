import React from 'react';
import { dados } from '../../dados/dataTable';
import DataTable from '../Main';
import { Container } from './style';

interface Props {
    onClicked?(): void
}

const Body: React.FC<Props> = ({onClicked}) => {
    
    return(
        <Container>
            <DataTable 
                columns={[
                    'Data',
                    'Demanda',
                    'Capacidade',
                    'Atendimento Planejado',
                    'Atendimento Realizado',
                    'Desvio'
                ]}
                onClicked={onClicked}
                data={dados}
                 />
        </Container>
    );

}

export default Body;