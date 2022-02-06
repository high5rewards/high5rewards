import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';


const Store_card = props => { {

    const {storeName} = props

    let navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={require("../../../images/coffee.png")}
            />

            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {storeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                A coffee shop where devs get together. 
            </Typography>
            </CardContent>
            <CardActions>
            <Button onClick={() => navigate('store000')} size="small" variant='contained' size="small" color="success">Subscriptions</Button>
            </CardActions>
        </Card>
        );
    }
}


export default Store_card