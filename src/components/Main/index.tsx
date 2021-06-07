import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { Title } from './style';

interface Row {
    data: string,
    demanda: string,
    capacidade: number,
    atendimentoPlane: number,
    atendimentoRealizado: number,
    desvio: number,
}

interface Props {
    columns: string[],
    data: {
        rows: Row[]
    }
    onClicked?(): void 
}

const DataTable: React.FC<Props> = ({columns, data, onClicked}) => {

    return(
        <>
            <Title>Dados Demandas</Title>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => <TableCell align="center">{column}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.rows.map((row) => (
                            <TableRow key={row.data&&row.demanda}>
                                <TableCell align="center">{row.data}</TableCell>
                                <TableCell align="center">{row.demanda}</TableCell>
                                <TableCell align="center">{row.capacidade}</TableCell>
                                <TableCell align="center">{row.atendimentoPlane}</TableCell>
                                <TableCell align="center">{row.atendimentoRealizado}</TableCell>
                                <TableCell align="center">{row.desvio}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}

export default DataTable;