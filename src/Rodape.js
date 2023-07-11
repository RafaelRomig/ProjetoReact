import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from './Imagens/logo.png';
import InstagramLogo from './Imagens/instagram.jpeg';
import FacebookLogo from './Imagens/facebook.jpeg';
import TwitterLogo from './Imagens/twitter.jpeg';

const Rodape = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bgcolor="#f2f2f2"
    >
      <Box display="flex" alignItems="center">
        <img src={Logo} alt="Logo" style={{ marginRight: 10, height: 30 }} />
        <Typography variant="body2">Título de Exemplo</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <img src={InstagramLogo} alt="Instagram" style={{ height: 20, marginRight: 10 }} />
        <img src={FacebookLogo} alt="Facebook" style={{ height: 20, marginRight: 10 }} />
        <img src={TwitterLogo} alt="Twitter" style={{ height: 20 }} />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="caption" style={{ marginRight: 10 }}>Localização</Typography>
        <Typography variant="body2">Endereço completo</Typography>
      </Box> 
    </Box>
  );
};

export default Rodape;
