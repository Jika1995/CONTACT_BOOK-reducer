import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({item}) {

  const navigate = useNavigate();

  return (
    <Card sx={{ width: '25%', mt: 2}} variant='outlined'>
      <CardMedia
        sx={{ height: 250 }}
        image={item.image}
        component='img'
        title="Contact Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.phoneNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={()=> navigate(`/edit/${item.id}`)}>Edit</Button>
        <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}