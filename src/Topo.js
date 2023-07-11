import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import Logo from './Imagens/logo.png';

const Topo = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ marginRight: 10, height: 30 }} />
        <Typography variant="h6">Título do Projeto</Typography>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          textColor="secondary"
          style={{ marginLeft: 'auto' }}
        >
          <Tab label="Menu 1" />
          <Tab label="Menu 2" />
          <Tab label="Menu 3" />
          <Tab label="Menu 4" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Topo;
