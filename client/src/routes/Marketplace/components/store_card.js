import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';





const Store_card = props => { {

    const {storeName} = props
    const {storeDesc} = props
    const {storeImg} = props

    let navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#616161', border: '2px solid #00e676'}}>

            <CardMedia
                component="img"
                height="140"
                image={storeImg}
                style={{
                    borderBottom: '2px solid #00e676'
                }}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ color: '#212121'}}>
                    {storeName}
                </Typography>
                <Typography variant="body2" style={{ color: '#212121', }}>
                    {storeDesc}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={() => navigate('store000')} size="small"  size="small" style={{
                    color: '#212121'
                }}>Subscriptions</Button>
            </CardActions>

        </Card>
        );
    }
}


export default Store_card