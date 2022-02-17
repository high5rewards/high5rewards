import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useNavigate } from 'react-router-dom';

// individual NFT subscription market card
const NFT_card = props => {

    let navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={require("../../../images/coffee.png")}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                6 months
            </Typography>
            <Typography variant="body2" color="text.secondary">
                No more bad days. Grab one java everyday for the next six months ^^ 
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={() => navigate('/app/marketplace/store000/nft000')} variant='contained' size="small" color="success">
            Purchase
            </Button>
        </CardActions>
        </Card>
    );
}

export default NFT_card;