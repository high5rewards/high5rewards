import React from "react"
import { Button } from '@mui/material';

const MintButton = () => {
    return (

        <Button onClick={()=>alert('mint')} variant='contained' size="small" color="success">
            Mint an NFT
        </Button>
    );
}

export default MintButton;