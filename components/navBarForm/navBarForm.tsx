import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { typeNetworkValue } from "@/const/const";

const NavBarForm = ({ handleChangeNetwork }: any) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "300px", height: "70px" }}
    >
      <Button
        sx={{ color: "black" }}
        onClick={() => {
          handleChangeNetwork(typeNetworkValue.mainnet);
        }}
      >
        <Typography variant="h6" gutterBottom>
          Mainnet ETH
        </Typography>
      </Button>

      <Button
        sx={{ color: "black" }}
        onClick={() => {
          handleChangeNetwork(typeNetworkValue.testnet);
        }}
      >
        <Typography variant="h6" gutterBottom>
          Testnet
        </Typography>
      </Button>
    </Grid>
  );
};

export default NavBarForm;
