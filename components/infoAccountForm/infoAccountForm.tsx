import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
interface IInfoAccountForm {
  account: string;
  balance: string;
}

const InfoAccountForm: FC<IInfoAccountForm> = ({ account, balance }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ width: "470px", height: "70px" }}
    >
      {account ? (
        <Typography variant="body1" gutterBottom>
          Address: {account}
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          loading...
        </Typography>
      )}
      {balance === "NaN" ? (
        <Typography variant="body1" gutterBottom>
          loading...
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          balance {balance}
        </Typography>
      )}
    </Grid>
  );
};

export default InfoAccountForm;
