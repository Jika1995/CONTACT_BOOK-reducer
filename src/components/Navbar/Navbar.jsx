import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Contact Book
          </Typography>

          <Button variant="contained" onClick={() => navigate('/add')}>
            Add Contact
          </Button>

          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Jika Abd" src="" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;