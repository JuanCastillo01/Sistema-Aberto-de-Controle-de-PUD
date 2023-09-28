import { Grid } from '@mui/material';
import React, { ReactNode } from 'react';
import Menu from '../componentes/Menu';


interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageLayout;
