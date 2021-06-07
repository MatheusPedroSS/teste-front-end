import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { dados } from '../../dados/dataTable';

interface Props {
    open: boolean,
    handleClose(): void
}

const FormDialog:React.FC<Props> = ({open, handleClose}) => {

    const [data, setData] = useState('');
    const [demanda, setDemanda] = useState('');
    const [capacidade, setCapacidade] = useState(1);
    const [atendimentoPlane, setAtendimentoPlane] = useState(1);
    const [atendimentoRealizado, setAtendimentoRealizado] = useState(1);

    const changeData= (event: any) => {
        setData(event.target.value);
    }
    const changeDemanda= (event: any) => {
        setDemanda(event.target.value);
    }
    const changeCapacidade= (event: any) => {
        setCapacidade(event.target.value);
    }
    const changeAtendimentoPlane= (event: any) => {
        setAtendimentoPlane(event.target.value);
    }
    const changeAtendimentoRealizado= (event: any) => {
        setAtendimentoRealizado(event.target.value);
    }

   const saveDemanda = () => {
       if(data !== '' && demanda !== '') {
            let dataSpl = data.split('-')
            dados.rows.push({
                data: dataSpl[2] + "/" + dataSpl[1] + "/" + dataSpl[0] ,
                demanda: demanda,
                capacidade: capacidade,
                atendimentoPlane: atendimentoPlane,
                atendimentoRealizado: atendimentoRealizado,
                desvio: Number.parseInt(`${((capacidade - atendimentoRealizado) / capacidade) * 100}`),
            })
       }
        handleClose()
   }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Demanda</DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontSize: '18px'}}>
                    Insira uma nova demanda.
                </DialogContentText>
                <TextField 
                    required={true}
                    autoFocus
                    id='demanda'
                    margin='dense'
                    style={{marginRight: '20px'}}
                    label='Demanda'
                    type='text'
                    onChange={e => changeDemanda(e)}
                    value={demanda}
                    fullWidth
                />
                <TextField
                    id='date'
                    margin='dense'
                    style={{ paddingTop: "15px", marginRight: '30px', alignItems: 'center'}}
                    label=''
                    type='date'
                    onChange={e => changeData(e)}
                    value={data}
                />
                <TextField 
                    id='capacidade'
                    margin='dense'
                    style={{marginRight: '30px'}}
                    label='Capacidade'
                    type='number'
                    onChange={e => changeCapacidade(e)}
                    value={capacidade}
                />
                <TextField
                    id='atendimentoPlane'
                    margin='dense'
                    style={{marginRight: '30px'}}
                    label='Atendimento Planejado'
                    type='number'
                    onChange={e => changeAtendimentoPlane(e)}
                    value={atendimentoPlane}
                />
                <TextField 
                    id='atendimentoRealizado'
                    margin='dense'
                    style={{marginRight: '30px'}}
                    label='Atendimento Realizado'
                    type='number'
                    onChange={e => changeAtendimentoRealizado(e)}
                    value={atendimentoRealizado}
                />
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={saveDemanda}>
                    Inserir
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default FormDialog;