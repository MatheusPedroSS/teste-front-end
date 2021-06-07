import React, { useState } from 'react';
import Body from '../../components/Body';
import Chart from '../../components/Chart';
import FormDialog from '../../components/Dialog';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItems';
import { dados } from '../../dados/dataTable';
import { Container } from './style';



const Home: React.FC = () => {

    const [dialog, setDialog] = useState(false)
    const [demandas, setDemandas] = useState(dados)

    const onClicked = () => {
        setDialog(true);
        setDemandas(demandas);
    }

    const onClose = () => {
        setDialog(false);
        setDemandas(demandas);
    }

    return(
        <Container>
            <Header />
            <Menu 
                itensMenu={[
                    <MenuItem id={1} text='Home' selected={true}/>,
                    <MenuItem id={2} text='Cadastrar Demandas' selected={true} clicked={onClicked}/> 
                ]}
            />
            {dialog ? '' : <Chart dados={demandas}/>}
            <Body onClicked={onClicked}/>
            <FormDialog open={dialog} handleClose={onClose}/>
        </Container>
    );
}

export default Home;