import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Store_card = props => { {
    const {storeName} = props
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
            <Button href="/store/1"size="small">Subscriptions</Button>
            <Button size="small"></Button>
            </CardActions>
        </Card>
        );
    }
}

export default Store_card