
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper/Paper';
import { Container, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import AddReferencias from '../componentes/AddReferencias';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';


const useStyles: any = makeStyles({});

const ManterReferencias: React.FC = () => {
  const classes = useStyles();

  const [primaryValue, setPrimaryValue] = useState(0);
  const [secondaryValue, setSecondaryValue] = useState(0);

  const primaryTabsHandleChange = (event: any, newValue: number) => {
    setPrimaryValue(newValue);
  };

  const secondaryTabsHandleChange = (event: any, newValue: number) => {
    setSecondaryValue(newValue);
  };

  return (
    <>
      <Container>
        <Tabs
          value={primaryValue}
          aria-label="User selection tabs"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Adicionar" onClick={(e) => primaryTabsHandleChange(e, 0)} style={{ fontSize: '2rem' }} />
          <Tab label="Buscar" onClick={(e) => primaryTabsHandleChange(e, 1)} style={{ fontSize: '2rem' }} />
        </Tabs>
        {/* //Adicionar*/}
        <TabPanel value={primaryValue} index={0}>
          <Typography>Adicionar nova referência</Typography>
          <Paper variant="outlined" style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>
            <Tabs
              value={secondaryValue}
              aria-label="User selection tabs"
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Registrar" onClick={(e) => secondaryTabsHandleChange(e, 0)} style={{ fontSize: '1.5rem' }} />
              <Tab label="Recuperar" onClick={(e) => secondaryTabsHandleChange(e, 1)} style={{ fontSize: '1.5rem' }} />
            </Tabs>
            {/* //Registrar*/}
            <TabPanel value={secondaryValue} index={0}>
              <AddReferencias />
            </TabPanel>
          </Paper>
          {/* //Buscar*/}
        </TabPanel>
        <TabPanel value={primaryValue} index={1}>

          <Typography>Buscar referência</Typography>
          <Paper variant="outlined" style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>

          </Paper>

        </TabPanel>
      </Container>
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}

    >
      {value === index && <Box p={3}>{children}</Box>}

    </div>
  );
};

export default ManterReferencias;