import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Container } from './style';


interface Row {
    data: string,
    demanda: string,
    capacidade: number,
    atendimentoPlane: number,
    atendimentoRealizado: number,
    desvio: number,
}

interface Props {
    dados: {
        rows: Row[]
    }
}

const Chart:React.FC<Props> = ({dados}) => {

    return(
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={dados.rows}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="data"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar stackId='a' name='Capacidade' dataKey='capacidade' fill='#8884d8'/>
                    <Bar stackId='a' name='Atendimento Realizado' dataKey='atendimentoRealizado' fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>  
        </Container>
    );
}

export default Chart;