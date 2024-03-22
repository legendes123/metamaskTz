import React, { FC } from "react";
import { Grid, TextField } from "@mui/material";
interface IInputForm {
  handleChangeAddressTranslation: (value: string) => void;
  handleChangeAmountTranslation: (value: string) => void;
}
const InputForm: FC<IInputForm> = ({
  handleChangeAddressTranslation,
  handleChangeAmountTranslation,
}) => {
  return (
    <Grid
      sx={{ width: "500px", height: "100px" }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid
        sx={{ width: "220px", height: "100px" }}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          onChange={(e) => {
            handleChangeAmountTranslation(e.target.value);
          }}
        />
      </Grid>
      <Grid
        sx={{ width: "220px", height: "100px" }}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <TextField
          id="outlined-basic"
          label="address"
          variant="outlined"
          onChange={(e) => {
            handleChangeAddressTranslation(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default InputForm;
