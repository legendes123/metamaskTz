import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import ButtonChangeWalletForm from "../../components/buttonChangeWalletForm/buttonChangeWalletForm";
import InfoAccountForm from "../../components/infoAccountForm/infoAccountForm";
import InputForm from "../../components/inputForm/inputForm";
import { useSDK } from "@metamask/sdk-react";
import svgIcon from "@/svg/binance-coin-bnb-icon.svg";
import { formatBalance } from "@/utils/utils";
import { useForm } from "@/hooks/useForm";
import { networksChainId } from "@/const/const";

const TestAria = () => {
  const [buttonIsActive, setButtonIsActive] = useState<Boolean>(true);
  const { account, balance } = useSDK();
  const [addressTranslation, setAddressTranslation] = useState<string>("");
  const [amountTranslation, setAmountTranslation] = useState<string>("");
  const form = useForm();
  const { switchToNetwork, sendTestCoins, addNetworkToMetamask } = form;
  useEffect(() => {
    addNetworkToMetamask("bnbTestnet");
    switchToNetwork(networksChainId.bnbTestnet);
  }, []);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ width: "270px", height: "70px" }}
      >
        <ButtonChangeWalletForm
          isActive={Boolean(buttonIsActive)}
          icon={svgIcon}
          title={"BNB"}
          handleChangeWallet={() => {
            switchToNetwork(networksChainId.bnbTestnet);
          }}
        ></ButtonChangeWalletForm>
      </Grid>
      <InfoAccountForm account={account!} balance={formatBalance(balance!)}></InfoAccountForm>
      <InputForm
        handleChangeAddressTranslation={(value: string) => {
          setAddressTranslation(value);
        }}
        handleChangeAmountTranslation={(value: string) => {
          setAmountTranslation(value);
        }}
      />
      <Button
        sx={{ width: "220px", height: "50px", backgroundColor: "#1d4dc4" }}
        variant="contained"
        onClick={() => {
          sendTestCoins(addressTranslation, amountTranslation);
        }}
      >
        Send
      </Button>
    </>
  );
};

export default TestAria;
