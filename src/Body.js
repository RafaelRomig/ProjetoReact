/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Body = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" justifyContent="flex-end" width="100%" alignItems="center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
        <div style={{ marginRight: '1em' }}>
          <img src="./Imagens/imagemEsquerda.jpeg" style={{ width: 200, height: 200 }} />
          <Typography variant="subtitle1" align="center">Texto</Typography>
        </div>
        <div style={{ marginLeft: '1em' }}>
          <img src="./Imagens/imagemDireita.jpeg" style={{ width: 200, height: 200 }} />
          <Typography variant="subtitle1" align="center">Texto</Typography>
        </div>
        </Box>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table size="small" style={{ width: '80%', marginTop: '5rem'  }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Sobrenome</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Rafael</TableCell>
              <TableCell>Romig</TableCell>
              <TableCell>Curitiba</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Samuel</TableCell>
              <TableCell>Diel</TableCell>
              <TableCell>Curitiba</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Ana</TableCell>
              <TableCell>Vargas</TableCell>
              <TableCell>Curitiba</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </Box>
  );
};

export default Body;
