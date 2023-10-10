import { Grid } from '@mui/material';
import React, { ReactNode } from 'react';
import Header from '../componentes/Header';
import Menu from '../componentes/Menu';


interface PageLayoutProps {
  children: ReactNode;
  headerText: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, headerText }) => {
  return (
    <Grid container style={{ paddingTop: '128px' }}>
      <Grid item xs={1} lg={2}></Grid>
      <Grid item xs={11} lg={10} style={{ display: 'flex', justifyContent: 'center' }}>
        <Header headerText={headerText} />
        {children} 
      </Grid>
      
      <Grid item xs={2} lg={2}>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default PageLayout;
