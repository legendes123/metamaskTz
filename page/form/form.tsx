import NavBarForm from "../../components/navBarForm/navBarForm";
import Mainnet from "../../modules/mainnet/mainnet";
import TestAria from "../../modules/testnet/testnet";
import { useForm } from "@/hooks/useForm";
import { useSDK } from "@metamask/sdk-react";
import React, { useEffect } from "react";
import { typeNetworkValue } from "@/const/const";
import { Box, Grid, Button } from "@mui/material";

const Form = () => {
  const { connected, connecting } = useSDK();
  const form = useForm();
  const { connectToMetaMask, network } = form;
  useEffect(() => {
    connectToMetaMask();
  }, []);
  function handleChangeNetwork(value: string) {
    network.setTypeNetwork(value);
  }
  return (
    <div>
      {connected ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "700px",
              height: "400px",
              borderRadius: "3%",
              backgroundColor: "white",
              boxShadow:
                "0 0.0625rem 0.1875rem rgba(0,0,0,0.12), 0 0.0625rem 0.125rem rgba(0,0,0,0.24)",
            }}
          >
            <Box sx={{ width: "650px", margin: "0 auto" }}>
              <NavBarForm handleChangeNetwork={handleChangeNetwork} />
              {network.typeNetwork === typeNetworkValue.mainnet ? (
                <Mainnet></Mainnet>
              ) : (
                <TestAria />
              )}
            </Box>
          </Grid>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Button onClick={connectToMetaMask} variant="contained">
            Connect MetaMask
          </Button>
        </Box>
      )}
    </div>
  );
};
export default Form;
