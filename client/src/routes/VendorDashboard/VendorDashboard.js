import React from "react";

// import MintButton from './components/MintButton';

import styles from "./VendorDashboard.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import loyalBean from '../../images/loyalBean.png';


/**Todo
 * 
 * mint button
 * display NFTs already minted
 * 
 *   vendorId: BigNumber { value: "1" },
  vendorAddress: '',
  vendorName: 'Mocha Madness',
  vendorBio: 'Coffee Shop',
  vendorCity: 'Amsterdam'
 */


//theme for form and buttons
const formStyles = {
  input: {
    color: "#00c853",
  },
  textarea: {
    color: "#00c853",

  },
  label: {
    color: "#00e676",
  },
  fieldset: {
    borderColor: "#00e676",
    transition: "border-color 0.5s",
  },
  "&:hover": {
    label: {
      color: "#00e676",
    },
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00e676",
  },
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#00e676",
    },
  },
});



function VendorDashboard() {
  return (
    <form id={styles.dash}>
    <ThemeProvider theme={theme}>
      <h3>Edit Profile</h3>

      {/* Edit Vendor Name */}
      <TextField
        label="Name"
        variant="outlined"
        size="small"
        margin="normal"
        color="primary"
        sx={formStyles}
      />

      {/* Edit Vendor Location */}
      <TextField
        label="Location"
        variant="outlined"
        size="small"
        margin="normal"
        sx={formStyles}
      />

    {/* Submit button */}
      <Button
        type="submit"
        variant="outlined"
        size="large"
      >
        Submit
      </Button>


      {/* Display NFTs already minted */}
      <h3>Manage Current NFTs</h3> 

      <div >
        <img src={loyalBean}/>
        <img src={loyalBean}/>
        <img src={loyalBean}/>
      </div>


      {/* New Subscriptions and Rewards*/}
      <h3>Mint New NFT</h3> 

      {/* NFT Name */}
      <TextField
        label="NFT Name"
        variant="outlined"
        size="small"
        margin="normal"
        sx={formStyles}
      />

      {/* NFT Description */}
      <TextField
        label="NFT Description"
        variant="outlined"
        size="small"
        margin="normal"
        sx={formStyles}
      />

      {/* Price in MATIC */}
      <TextField
        label="Price in MATIC"
        variant="outlined"
        size="small"
        margin="normal"
        sx={formStyles}
      />

      {/* Reward Upon Completion */}
      <TextField
        label="Reward Upon Completion"
        variant="outlined"
        size="small"
        margin="normal"
        sx={formStyles}
      />

      {/* choose image file */}

      {/* Mint NFT Button */}
      <Button
        type="submit"
        variant="outlined"
        size="large"
      >
        Mint
      </Button>



    </ThemeProvider>
  </form>




  );
}

export default VendorDashboard;
